import { NextRequest, NextResponse } from "next/server";
import { getPortalSession } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getPortalSession();
  if (!session || session.role !== "faculty") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id: examId } = await params;

  try {
    const exam = await prisma.exam.findFirst({
      where: { id: examId, facultyId: session.userId }
    });

    if (!exam) {
      return NextResponse.json({ error: "Exam not found or unauthorized" }, { status: 404 });
    }

    const { publish } = await req.json();
    const isPublished = publish !== false; // default to true

    await prisma.examSubmission.updateMany({
      where: { examId },
      data: { isPublished }
    });

    return NextResponse.json({
      success: true,
      message: isPublished ? "Results published successfully" : "Results retracted",
      isPublished
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
