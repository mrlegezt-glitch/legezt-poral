import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();

    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json({ error: "prompt string required" }, { status: 400 });
    }

    const apiKey = process.env.NVIDIA_IMAGE_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Image service not configured" }, { status: 503 });
    }

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

    return NextResponse.json({ base64 });
  } catch (e) {
    console.error("AI image error:", e);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
