import { NextRequest, NextResponse } from "next/server";
import { getPortalSession } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getPortalSession();
  if (!session || session.role !== "student") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id: submissionId } = await params;

  try {
    const submission = await prisma.examSubmission.findFirst({
      where: { id: submissionId, studentId: session.userId, isPublished: true },
      include: {
        exam: {
          include: {
            questions: true
          }
        },
        answers: true
      }
    });

    if (!submission) {
      return NextResponse.json({ error: "Result not found or not published yet" }, { status: 404 });
    }

    return NextResponse.json({ success: true, submission });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
