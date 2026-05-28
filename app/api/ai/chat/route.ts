import { NextRequest, NextResponse } from "next/server";
import { getPortalSession } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const session = await getPortalSession();
    if (!session || session.role !== "student") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "messages array required" }, { status: 400 });
    }

    const apiKey = process.env.NVIDIA_TEXT_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "AI service not configured" }, { status: 503 });
    }

    // Save the user's prompt (last message in the received array)
    const userPrompt = messages[messages.length - 1]?.content || "";
    if (userPrompt) {
      await prisma.aiChatMessage.create({
        data: {
          studentId: session.userId,
          role: "user",
          type: "text",
          content: userPrompt,
        },
      });
    }

    const systemMessage = {
      role: "system",
      content:
        "You are LeGeZt AI, a helpful and friendly assistant for Lords Institute of Engineering & Technology students. " +
        "You help with academics, college queries, exam preparation, and general questions. " +
        "Keep responses concise and student-friendly. Render code blocks inside triple backticks with a language specifier if possible. " +
        "If asked to generate an image, instruct the user to type /imagine followed by their prompt.",
    };

    const response = await fetch("https://integrate.api.nvidia.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "meta/llama-3.3-70b-instruct",
        messages: [systemMessage, ...messages],
        temperature: 0.7,
        max_tokens: 1024,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("NVIDIA Text API error:", err);
      return NextResponse.json({ error: "AI service error" }, { status: 502 });
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content ?? "Sorry, I could not generate a response.";

    // Save assistant's reply
    await prisma.aiChatMessage.create({
      data: {
        studentId: session.userId,
        role: "assistant",
        type: "text",
        content: reply,
      },
    });

    return NextResponse.json({ reply });
  } catch (e) {
    console.error("AI chat error:", e);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
