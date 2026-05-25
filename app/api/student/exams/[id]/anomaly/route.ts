import { NextRequest, NextResponse } from "next/server";
import { getPortalSession } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getPortalSession();
  if (!session || session.role !== "student") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id: examId } = params;

  try {
    const { type, screenshot } = await req.json();

    if (!type) {
      return NextResponse.json({ error: "Missing anomaly type parameter" }, { status: 400 });
    }

    const submission = await prisma.examSubmission.findFirst({
      where: { examId, studentId: session.userId, status: "ongoing" }
    });

    if (!submission) {
      return NextResponse.json({ error: "No ongoing exam session found" }, { status: 404 });
    }

    const anomaly = await prisma.anomalyRecord.create({
      data: {
        submissionId: submission.id,
        type,
        screenshot // Optional base64 or host URL
      }
    });

    return NextResponse.json({ success: true, anomalyId: anomaly.id });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
