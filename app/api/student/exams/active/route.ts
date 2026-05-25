import { NextRequest, NextResponse } from "next/server";
import { getPortalSession } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const session = await getPortalSession();
  if (!session || session.role !== "student") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Find active exams
    const exams = await prisma.exam.findMany({
      where: {
        isActive: true,
        submissions: {
          none: {
            studentId: session.userId,
            status: { in: ["submitted", "terminated"] }
          }
        }
      },
      select: {
        id: true,
        title: true,
        durationMins: true,
        latitude: true,
        longitude: true,
        radiusMeters: true,
        createdAt: true
      }
    });

    return NextResponse.json({ success: true, exams });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
