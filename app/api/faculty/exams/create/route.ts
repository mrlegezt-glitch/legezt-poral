import { NextRequest, NextResponse } from "next/server";
import { getPortalSession } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const session = await getPortalSession();
  if (!session || session.role !== "faculty") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { title, durationMins, latitude, longitude, radiusMeters, questions } = await req.json();

    if (!title || !durationMins || latitude === undefined || longitude === undefined) {
      return NextResponse.json({ error: "Missing required exam parameters" }, { status: 400 });
    }

    // Create the exam transactionally with questions
    const exam = await prisma.exam.create({
      data: {
        title,
        durationMins: Number(durationMins),
        latitude: Number(latitude),
        longitude: Number(longitude),
        radiusMeters: Number(radiusMeters || 100),
        facultyId: session.userId,
        questions: {
          create: (questions || []).map((q: any) => ({
            questionText: q.questionText,
            optionA: q.optionA,
            optionB: q.optionB,
            optionC: q.optionC,
            optionD: q.optionD,
            correctOption: q.correctOption.toUpperCase(),
            marks: Number(q.marks || 1),
          })),
        },
      },
      include: {
        questions: true,
      },
    });

    return NextResponse.json({ success: true, exam });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
