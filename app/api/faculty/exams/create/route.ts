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

    // Fetch faculty info
    const faculty = await prisma.portalFaculty.findUnique({
      where: { id: session.userId }
    });
    const facultyName = faculty?.fullName || "Faculty Advisor";

    // Find all mapped students
    const mappings = await prisma.facultyStudentMap.findMany({
      where: { facultyId: session.userId, isActive: true },
      include: { student: true }
    });

    // Send notifications and emails asynchronously to avoid blocking the HTTP response
    import("@/lib/mail").then(async ({ sendExamActiveEmail }) => {
      const notifMessage = `Naya surprise test "${exam.title}" active ho gaya hai. Duration: ${exam.durationMins} mins. Jaldi se test attempt karein!`;
      for (const map of mappings) {
        try {
          // 1. Create in-app notification
          await prisma.notification.create({
            data: {
              studentId: map.studentId,
              title: "New Surprise Test Active! ⚡",
              message: notifMessage
            }
          });

          // 2. Dispatch email
          await sendExamActiveEmail(
            map.student.email,
            exam.title,
            exam.durationMins,
            map.student.fullName,
            facultyName
          );
        } catch (err) {
          console.error(`Failed to notify student ${map.studentId} about active exam:`, err);
        }
      }
    }).catch(err => console.error("Failed to load mail helper for active exam notification:", err));

    return NextResponse.json({ success: true, exam });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
