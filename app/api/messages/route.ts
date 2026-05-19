import { NextRequest, NextResponse } from "next/server";
import { getPortalSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { z } from "zod";

const sendSchema = z.object({
  content: z.string().min(1).max(2000),
  receiverId: z.string(),
  receiverRole: z.enum(["student", "faculty"]),
});

// GET: Fetch conversation messages
export async function GET(req: NextRequest) {
  const session = await getPortalSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const withId = searchParams.get("with");
  if (!withId) return NextResponse.json({ error: "Missing 'with' param" }, { status: 400 });

  // Greedy approach: load last 50 msgs, ordered newest first for quick display
  const messages = await prisma.portalMessage.findMany({
    where: {
      OR: [
        { senderStudentId: session.userId, receiverStudentId: withId },
        { senderStudentId: withId, receiverStudentId: session.userId },
        { senderFacultyId: session.userId, receiverFacultyId: withId },
        { senderFacultyId: withId, receiverFacultyId: session.userId },
        { senderStudentId: session.userId, receiverFacultyId: withId },
        { senderFacultyId: withId, receiverStudentId: session.userId },
        { senderFacultyId: session.userId, receiverStudentId: withId },
        { senderStudentId: withId, receiverFacultyId: session.userId },
      ],
    },
    orderBy: { createdAt: "asc" },
    take: 100,
  });

  // Mark as read
  await prisma.portalMessage.updateMany({
    where: {
      isRead: false,
      OR: [
        { senderStudentId: withId, receiverStudentId: session.userId },
        { senderFacultyId: withId, receiverStudentId: session.userId },
        { senderStudentId: withId, receiverFacultyId: session.userId },
        { senderFacultyId: withId, receiverFacultyId: session.userId },
      ],
    },
    data: { isRead: true },
  });

  return NextResponse.json({ messages });
}

// POST: Send a message
export async function POST(req: NextRequest) {
  const session = await getPortalSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json().catch(() => null);
  const parsed = sendSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Invalid input" }, { status: 400 });

  const { content, receiverId, receiverRole } = parsed.data;

  const data: Record<string, string> = { content };
  if (session.role === "student") data.senderStudentId = session.userId;
  else data.senderFacultyId = session.userId;
  if (receiverRole === "student") data.receiverStudentId = receiverId;
  else data.receiverFacultyId = receiverId;

  const message = await prisma.portalMessage.create({ data: data as never });
  return NextResponse.json({ message }, { status: 201 });
}
