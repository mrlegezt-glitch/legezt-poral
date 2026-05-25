import { NextRequest, NextResponse } from "next/server";
import { getPortalSession } from "@/lib/auth";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getPortalSession();
  if (!session || session.role !== "faculty") {
    return new Response("Unauthorized", { status: 401 });
  }

  // Next.js dynamic route params
  const { id: examId } = await params;

  try {
    const exam = await prisma.exam.findUnique({
      where: { id: examId, facultyId: session.userId }
    });

    if (!exam) {
      return new Response("Exam not found or unauthorized", { status: 404 });
    }

    const responseStream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();

        const sendUpdate = async () => {
          try {
            // Fetch all submissions for this exam including student metadata and anomaly logs
            const submissions = await prisma.examSubmission.findMany({
              where: { examId },
              include: {
                student: {
                  select: {
                    fullName: true,
                    enrollmentNo: true,
                    email: true,
                    branch: true,
                  }
                },
                anomaliesLog: {
                  orderBy: { timestamp: "desc" }
                }
              },
              orderBy: { startedAt: "desc" }
            });

            const data = JSON.stringify({
              success: true,
              submissions: submissions.map((s) => ({
                id: s.id,
                studentName: s.student.fullName,
                enrollmentNo: s.student.enrollmentNo,
                email: s.student.email,
                branch: s.student.branch,
                status: s.status, // "ongoing", "submitted", "terminated"
                score: s.score,
                startedAt: s.startedAt,
                submittedAt: s.submittedAt,
                anomalies: s.anomaliesLog.map((a) => ({
                  id: a.id,
                  type: a.type,
                  timestamp: a.timestamp
                }))
              }))
            });

            controller.enqueue(encoder.encode(`data: ${data}\n\n`));
          } catch (err: any) {
            console.error("SSE push error:", err);
          }
        };

        // First push
        await sendUpdate();

        // Push periodically every 2 seconds
        const intervalId = setInterval(sendUpdate, 2000);

        req.signal.addEventListener("abort", () => {
          clearInterval(intervalId);
          controller.close();
          console.log(`SSE connection closed for exam: ${examId}`);
        });
      }
    });

    return new Response(responseStream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache, no-transform",
        "Connection": "keep-alive"
      }
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
