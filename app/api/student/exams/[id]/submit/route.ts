import { NextRequest, NextResponse } from "next/server";
import { getPortalSession } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getPortalSession();
  if (!session || session.role !== "student") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id: examId } = await params;

  try {
    const { answers, forceTerminate } = await req.json();

    const submission = await prisma.examSubmission.findFirst({
      where: { examId, studentId: session.userId, status: "ongoing" },
      include: { exam: { include: { questions: true } } }
    });

    if (!submission) {
      return NextResponse.json({ error: "No ongoing exam session found" }, { status: 404 });
    }

    let finalScore = 0;
    const questions = submission.exam.questions;

    const studentAnswersData: any[] = [];
    if (!forceTerminate && answers && Array.isArray(answers)) {
      answers.forEach((ans: any) => {
        const q = questions.find(item => item.id === ans.questionId);
        if (q) {
          const isCorrect = q.correctOption.toUpperCase() === ans.selectedKey.toUpperCase();
          if (isCorrect) {
            finalScore += q.marks;
          }
          studentAnswersData.push({
            questionId: ans.questionId,
            selectedKey: ans.selectedKey.toUpperCase(),
            isCorrect: isCorrect
          });
        }
      });
    }

    const updated = await prisma.examSubmission.update({
      where: { id: submission.id },
      data: {
        score: finalScore,
        status: forceTerminate ? "terminated" : "submitted",
        submittedAt: new Date(),
        answers: {
          create: studentAnswersData
        }
      }
    });

    // Trigger the background worker pipeline asynchronously to avoid blocking student sheet uploads
    import("@/lib/exams").then(({ processPostExamPipeline }) => {
      processPostExamPipeline(submission.id).catch((e) => console.error("Post-Exam pipeline failure:", e));
    });

    return NextResponse.json({
      success: true,
      status: updated.status,
      score: finalScore
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
