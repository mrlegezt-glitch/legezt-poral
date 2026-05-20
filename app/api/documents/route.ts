import { NextRequest, NextResponse } from "next/server";
import { getPortalSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { uploadToBlob, generateSasUrl } from "@/lib/azure-blob";
import { MAX_FILE_SIZE_BYTES, ALLOWED_MIME_TYPES } from "@/lib/constants";

// GET: List accessible documents (greedy: sorted by relevance then recency)
export async function GET(req: NextRequest) {
  try {
    const session = await getPortalSession();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");

    // Build role-based OR conditions safely
    const orConditions: object[] = [{ isPublic: true }];

    if (session.role === "student") {
      // Student sees: docs shared with them OR docs uploaded by themselves
      orConditions.push({ sharedWith: { has: session.userId } });
      orConditions.push({ uploaderStudentId: session.userId });
    } else if (session.role === "faculty") {
      // Faculty sees: docs they uploaded
      orConditions.push({ uploaderFacultyId: session.userId });
    }

    let docs = await prisma.portalDocument.findMany({
      where: {
        OR: orConditions,
        ...(category ? { category } : {}),
      },
      orderBy: { createdAt: "desc" },
      take: 100,
    });

    // Greedy relevance sort for students: same branch+year docs score highest
    if (session.role === "student") {
      const student = await prisma.portalStudent.findUnique({
        where: { id: session.userId },
        select: { year: true, branch: true },
      });
      if (student) {
        docs = docs.sort((a, b) => {
          const scoreA = (a.year === student.year ? 2 : 0) + (a.branch === student.branch ? 3 : 0);
          const scoreB = (b.year === student.year ? 2 : 0) + (b.branch === student.branch ? 3 : 0);
          return scoreB - scoreA;
        });
      }
    }

    // Generate SAS URLs for all docs (silent fallback if Azure not configured)
    const docsWithUrls = docs.map((d) => ({
      ...d,
      downloadUrl: d.fileUrl ? generateSasUrl(d.fileUrl, 30) : "",
    }));

    return NextResponse.json({ documents: docsWithUrls });
  } catch (error: any) {
    console.error("[GET /api/documents] Error:", error?.message ?? error);
    return NextResponse.json(
      { error: "Failed to fetch documents", details: error?.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}

// POST: Upload a document via multipart form
export async function POST(req: NextRequest) {
  try {
    const session = await getPortalSession();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    // Only faculty can upload
    if (session.role !== "faculty") {
      return NextResponse.json({ error: "Only faculty members can upload documents" }, { status: 403 });
    }

    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    const title = formData.get("title") as string;
    const description = formData.get("description") as string | null;
    const category = formData.get("category") as string | null;
    const year = formData.get("year") ? parseInt(formData.get("year") as string) : null;
    const branch = formData.get("branch") as string | null;
    const batch = formData.get("batch") as string | null;
    const isPublic = formData.get("isPublic") === "true";

    if (!file || !title) {
      return NextResponse.json({ error: "File and title required" }, { status: 400 });
    }
    if (file.size > MAX_FILE_SIZE_BYTES) {
      return NextResponse.json({ error: "File too large (max 10MB)" }, { status: 413 });
    }
    if (!ALLOWED_MIME_TYPES.includes(file.type)) {
      return NextResponse.json({ error: `File type '${file.type}' not allowed` }, { status: 415 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const blobName = await uploadToBlob(buffer, file.name, "documents", file.type);

    const doc = await prisma.portalDocument.create({
      data: {
        title,
        description: description ?? undefined,
        fileUrl: blobName,
        fileName: file.name,
        fileSize: file.size,
        mimeType: file.type,
        category: category ?? undefined,
        year: year ?? undefined,
        branch: branch ?? undefined,
        batch: batch ?? undefined,
        isPublic,
        uploaderFacultyId: session.userId,
        sharedWith: [],
      },
    });

    return NextResponse.json(
      { document: { ...doc, downloadUrl: generateSasUrl(blobName, 30) } },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("[POST /api/documents] Error:", error?.message ?? error);
    return NextResponse.json(
      { error: "Failed to upload document to backend", details: error?.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}
