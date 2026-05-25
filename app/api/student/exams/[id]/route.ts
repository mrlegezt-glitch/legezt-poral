import { NextRequest, NextResponse } from "next/server";
import { getPortalSession } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getPortalSession();
  if (!session || session.role !== "student") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Next.js params is a Promise in newer Next.js versions, let's await it or read properties
  const { id: examId } = await params;

  try {
    const exam = await prisma.exam.findUnique({
      where: { id: examId, isActive: true },
      include: { questions: true }
    });

    if (!exam) {
      return NextResponse.json({ error: "Exam not found or inactive" }, { status: 404 });
    }

    // Check if there is an existing ongoing submission, otherwise create it
    let submission = await prisma.examSubmission.findFirst({
      where: { examId, studentId: session.userId }
    });

    if (submission && submission.status !== "ongoing") {
      return NextResponse.json({ error: "Exam already submitted or terminated" }, { status: 400 });
    }

    if (!submission) {
      submission = await prisma.examSubmission.create({
        data: {
          examId,
          studentId: session.userId,
          status: "ongoing"
        }
      });
    }

    // Shuffle questions dynamically
    const shuffledQuestions = [...exam.questions].sort(() => Math.random() - 0.5);

    // Shuffle options dynamically for each question
    const processedQuestions = shuffledQuestions.map((q) => {
      const options = [
        { key: "A", val: q.optionA },
        { key: "B", val: q.optionB },
        { key: "C", val: q.optionC },
        { key: "D", val: q.optionD }
      ];

      // Shuffle options list
      const shuffledOptions = [...options].sort(() => Math.random() - 0.5);

      return {
        id: q.id,
        questionText: q.questionText,
        options: shuffledOptions.map((o, idx) => {
          const mapKeys = ["A", "B", "C", "D"];
          return {
            originalKey: o.key, 
            displayKey: mapKeys[idx],
            optionText: o.val
          };
        }),
        marks: q.marks
      };
    });

    return NextResponse.json({
      success: true,
      exam: {
        id: exam.id,
        title: exam.title,
        durationMins: exam.durationMins,
        latitude: exam.latitude,
        longitude: exam.longitude,
        radiusMeters: exam.radiusMeters,
        questions: processedQuestions
      },
      submissionId: submission.id
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
