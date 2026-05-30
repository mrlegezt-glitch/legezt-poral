import { NextRequest, NextResponse } from "next/server";
import { getPortalSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { uploadToBlob, generateSasUrl } from "@/lib/azure-blob";

export async function GET(req: NextRequest) {
  const session = await getPortalSession();
  if (!session || session.role !== "student") return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const student = await prisma.portalStudent.findUnique({
    where: { id: session.userId },
    select: { id: true, fullName: true, username: true, email: true, phone: true, enrollmentNo: true, year: true, branch: true, collegeName: true, profilePhotoUrl: true, bio: true, status: true, assignedFacultyId: true, lastLoginAt: true, createdAt: true },
  });

  if (!student) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({
    student: {
      ...student,
      profilePhotoUrl: student.profilePhotoUrl ? generateSasUrl(student.profilePhotoUrl, 120) : null,
      collegeLogoUrl: "/lords_logo.png"
    }
  });
}

export async function PUT(req: NextRequest) {
  try {
    const session = await getPortalSession();
    if (!session || session.role !== "student") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const formData = await req.formData();
    const fullName = formData.get("fullName") as string | null;
    const bio = formData.get("bio") as string | null;
    const file = formData.get("file") as File | null;

    const updateData: any = {};
    if (fullName && fullName.trim().length > 0) {
      updateData.fullName = fullName.trim();
    }
    if (bio !== null) {
      updateData.bio = bio.trim();
    }

    if (file) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const blobName = await uploadToBlob(buffer, file.name, "profiles", file.type || "image/jpeg");
      updateData.profilePhotoUrl = blobName;
    }

    const updatedStudent = await prisma.portalStudent.update({
      where: { id: session.userId },
      data: updateData,
      select: {
        id: true,
        fullName: true,
        username: true,
        email: true,
        phone: true,
        enrollmentNo: true,
        year: true,
        branch: true,
        collegeName: true,
        profilePhotoUrl: true,
        bio: true,
        status: true,
        assignedFacultyId: true,
        lastLoginAt: true,
        createdAt: true
      }
    });

    return NextResponse.json({
      student: {
        ...updatedStudent,
        profilePhotoUrl: updatedStudent.profilePhotoUrl ? generateSasUrl(updatedStudent.profilePhotoUrl, 120) : null,
        collegeLogoUrl: "/lords_logo.png"
      }
    });
  } catch (error: any) {
    console.error("[PUT /api/student/me] Error:", error?.message ?? error);
    return NextResponse.json(
      { error: "Failed to update profile info", details: error?.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}
