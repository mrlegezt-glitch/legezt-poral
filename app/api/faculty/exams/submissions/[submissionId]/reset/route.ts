import { NextRequest, NextResponse } from "next/server";
import { getPortalSession } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest, { params }: { params: Promise<{ submissionId: string }> }) {
  const session = await getPortalSession();
  if (!session || session.role !== "faculty") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { submissionId } = await params;

  try {
    const submission = await prisma.examSubmission.findUnique({
      where: { id: submissionId },
      include: { exam: true }
    });

    if (!submission) {
      return NextResponse.json({ error: "Submission not found" }, { status: 404 });
    }

    // Verify that this faculty owns the exam
    if (submission.exam.facultyId !== session.userId) {
      return NextResponse.json({ error: "Unauthorized access to this exam submission" }, { status: 403 });
    }

    // Delete submission to re-open the exam for the student
    await prisma.examSubmission.delete({
      where: { id: submissionId }
    });

    return NextResponse.json({ success: true, message: "Exam session reset successfully" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
