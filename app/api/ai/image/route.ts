import { NextRequest, NextResponse } from "next/server";
import { getPortalSession } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const session = await getPortalSession();
    if (!session || session.role !== "student") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { prompt } = await req.json();

    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json({ error: "prompt string required" }, { status: 400 });
    }

    const apiKey = process.env.NVIDIA_IMAGE_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Image service not configured" }, { status: 503 });
    }

    // Save the user's imagine message
    await prisma.aiChatMessage.create({
      data: {
        studentId: session.userId,
        role: "user",
        type: "text",
        content: `/imagine ${prompt.trim()}`,
      },
    });

    const response = await fetch(
      "https://ai.api.nvidia.com/v1/genai/black-forest-labs/flux.1-dev",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          prompt: prompt.trim(),
          width: 1024,
          height: 1024,
        }),
      }
    );

    if (!response.ok) {
      const err = await response.text();
      console.error("NVIDIA Image API error:", err);
      return NextResponse.json({ error: "Image generation failed" }, { status: 502 });
    }

    const data = await response.json();
    const base64 = data.artifacts?.[0]?.base64;

    if (!base64) {
      return NextResponse.json({ error: "No image returned" }, { status: 502 });
    }

    // Save the assistant's generated image response
    await prisma.aiChatMessage.create({
      data: {
        studentId: session.userId,
        role: "assistant",
        type: "image",
        content: base64,
        imagePrompt: prompt.trim(),
      },
    });

    return NextResponse.json({ base64 });
  } catch (e) {
    console.error("AI image error:", e);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
