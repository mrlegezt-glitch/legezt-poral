import { NextRequest, NextResponse } from "next/server";
import { getPortalSession } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const session = await getPortalSession();
  if (!session || session.role !== "student") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const submissions = await prisma.examSubmission.findMany({
      where: {
        studentId: session.userId,
        status: { in: ["submitted", "terminated"] },
        isPublished: true
      },
      include: {
        exam: {
          include: {
            questions: true
          }
        }
      },
      orderBy: { submittedAt: "desc" }
    });

    const results = submissions.map((s) => {
      const maxScore = s.exam.questions.reduce((acc, q) => acc + q.marks, 0);
      return {
        id: s.id,
        examId: s.examId,
        examTitle: s.exam.title,
        score: s.score,
        maxScore: maxScore,
        status: s.status,
        submittedAt: s.submittedAt
      };
    });

    return NextResponse.json({ success: true, results });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
