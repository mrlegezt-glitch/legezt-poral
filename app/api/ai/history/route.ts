import { NextRequest, NextResponse } from "next/server";
import { getPortalSession } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const session = await getPortalSession();
    if (!session || session.role !== "student") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const messages = await prisma.aiChatMessage.findMany({
      where: { studentId: session.userId },
      orderBy: { createdAt: "asc" },
    });

    return NextResponse.json({
      success: true,
      messages: messages.map((m) => ({
        id: m.id,
        role: m.role,
        type: m.type,
        content: m.content,
        imagePrompt: m.imagePrompt,
        createdAt: m.createdAt,
      })),
    });
  } catch (e) {
    console.error("Fetch AI history error:", e);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const session = await getPortalSession();
    if (!session || session.role !== "student") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await prisma.aiChatMessage.deleteMany({
      where: { studentId: session.userId },
    });

    return NextResponse.json({ success: true, message: "History cleared successfully" });
  } catch (e) {
    console.error("Clear AI history error:", e);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
