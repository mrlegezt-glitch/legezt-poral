import { NextRequest, NextResponse } from "next/server";
import { getPortalSession } from "@/lib/auth";
import prisma from "@/lib/prisma";

function getErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : "Unknown error";
}

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

    if (isPublished) {
      // Find all submissions with student details and answers
      const submissions = await prisma.examSubmission.findMany({
        where: { examId, status: { in: ["submitted", "terminated"] } },
        include: {
          student: true,
          answers: true
        }
      });

      const questions = await prisma.question.findMany({
        where: { examId }
      });
      const maxScore = questions.reduce((sum, q) => sum + q.marks, 0);

      // We can run the notifications dispatch in the background so it doesn't block the HTTP response
      import("@/lib/mail").then(async ({ sendExamResultEmail }) => {
        for (const sub of submissions) {
          try {
            // 1. Create in-app notification
            const notifMessage = `Aapka surprise test "${exam.title}" ka result aa gaya hai! Score: ${sub.score}/${maxScore}. Details dekhne ke liye Results tab check karein.`;
            
            // Check if notification already exists to avoid spamming
            const existingNotif = await prisma.notification.findFirst({
              where: {
                studentId: sub.studentId,
                title: "Surprise Test Result Published",
                message: notifMessage
              }
            });

            if (!existingNotif) {
              await prisma.notification.create({
                data: {
                  studentId: sub.studentId,
                  title: "Surprise Test Result Published",
                  message: notifMessage
                }
              });
            }

            // 2. Compute wrong answers for the email
            const wrongAnswers = sub.answers
              .filter(ans => !ans.isCorrect)
              .map(ans => {
                const q = questions.find(item => item.id === ans.questionId);
                return {
                  question: q?.questionText || "Question",
                  selected: ans.selectedKey,
                  correct: q?.correctOption || "N/A"
                };
              });

            // 3. Send email to student
            await sendExamResultEmail(
              sub.student.email,
              exam.title,
              sub.score,
              maxScore,
              sub.student.fullName,
              wrongAnswers
            );
          } catch (err) {
            console.error(`Failed to process notification/email for submission ${sub.id}:`, err);
          }
        }
      }).catch(err => console.error("Failed to load mail helper:", err));
    }

    return NextResponse.json({
      success: true,
      message: isPublished ? "Results published successfully" : "Results retracted",
      isPublished
    });
  } catch (error: unknown) {
    return NextResponse.json({ error: getErrorMessage(error) }, { status: 500 });
  }
}
