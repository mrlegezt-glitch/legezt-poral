import { NextRequest, NextResponse } from "next/server";
import { getPortalSession } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const session = await getPortalSession();
  if (!session || session.role !== "faculty") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { csvText } = await req.json();
    if (!csvText) {
      return NextResponse.json({ error: "No CSV content provided" }, { status: 400 });
    }

    // Split rows safely handling quoted newlines and spaces
    const rows = csvText.split(/\r?\n/).map((row: string) => {
      // Split by comma, handling quotes correctly
      return row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/).map(cell => cell.replace(/^"|"$/g, '').trim());
    }).filter((row: string[]) => row.length > 0 && row.some(cell => cell !== ""));

    if (rows.length < 2) {
      return NextResponse.json({ error: "CSV must contain a header row and at least one question" }, { status: 400 });
    }

    const headers = rows[0].map((h: string) => h.toLowerCase().trim().replace(/[\s_-]+/g, ''));
    
    // Lenient helper to match common headers
    const findIndex = (variations: string[]) => {
      return headers.findIndex((h: string) => variations.some(v => h === v || h.includes(v)));
    };

    const idx = {
      q: findIndex(["question", "problem", "qtext", "questiontext", "prob"]),
      a: findIndex(["optiona", "opta", "opa", "alta", "a"]),
      b: findIndex(["optionb", "optb", "opb", "altb", "b"]),
      c: findIndex(["optionc", "optc", "opc", "altc", "c"]),
      d: findIndex(["optiond", "optd", "opd", "altd", "d"]),
      co: findIndex(["correctoption", "correctanswer", "correct", "answer", "ans", "correctopt"]),
      m: findIndex(["marks", "mark", "weight", "points", "score", "pts"])
    };

    const missingHeaders: string[] = [];
    if (idx.q === -1) missingHeaders.push("question");
    if (idx.a === -1) missingHeaders.push("option_a");
    if (idx.b === -1) missingHeaders.push("option_b");
    if (idx.c === -1) missingHeaders.push("option_c");
    if (idx.d === -1) missingHeaders.push("option_d");
    if (idx.co === -1) missingHeaders.push("correct_option");

    if (missingHeaders.length > 0) {
      // Try to use Gemini to fix it automatically
      const corrected = await attemptGeminiCorrection(csvText);
      return NextResponse.json({
        success: false,
        error: `Missing headers: ${missingHeaders.join(", ")}`,
        canCorrect: !!corrected,
        corrected
      }, { status: 422 });
    }

    const questions: any[] = [];
    const errors: string[] = [];
    const requiredHeaders = ["question", "option_a", "option_b", "option_c", "option_d", "correct_option", "marks"];

    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      if (row.length < requiredHeaders.length) {
        errors.push(`Row ${i + 1}: Insufficient columns (expected ${requiredHeaders.length}, got ${row.length})`);
        continue;
      }

      const questionText = row[idx.q];
      const optionA = row[idx.a];
      const optionB = row[idx.b];
      const optionC = row[idx.c];
      const optionD = row[idx.d];
      const correctOption = row[idx.co]?.toUpperCase();
      const marks = parseInt(row[idx.m] || "1", 10);

      if (!questionText || !optionA || !optionB || !optionC || !optionD || !correctOption) {
        errors.push(`Row ${i + 1}: Missing required fields`);
        continue;
      }

      if (!["A", "B", "C", "D"].includes(correctOption)) {
        errors.push(`Row ${i + 1}: Invalid correct_option '${correctOption}' (must be A, B, C, or D)`);
        continue;
      }

      questions.push({
        questionText,
        optionA,
        optionB,
        optionC,
        optionD,
        correctOption,
        marks: isNaN(marks) ? 1 : marks
      });
    }

    if (errors.length > 0) {
      const corrected = await attemptGeminiCorrection(csvText);
      return NextResponse.json({
        success: false,
        errors,
        canCorrect: !!corrected,
        corrected
      }, { status: 422 });
    }

    return NextResponse.json({ success: true, questions });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

async function attemptGeminiCorrection(csvText: string) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;

  try {
    const prompt = `Act as an expert data formatter. The attached question data contains structural anomalies or missing fields that break a strict CSV validator. Analyze the data, fix missing options or formatting issues, and return it strictly as a valid JSON array of objects with the keys: questionText, optionA, optionB, optionC, optionD, correctOption (must be A, B, C, or D), and marks (integer). Return ONLY the clean JSON array without any markdown block quotes, backticks, or explanations. Broken CSV data:\n\n${csvText}`;

    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    });

    if (!res.ok) return null;
    const data = await res.json();
    const textResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!textResponse) return null;

    // Clean any json formatting wrappers
    const jsonString = textResponse.replace(/```json|```/g, "").trim();
    return JSON.parse(jsonString);
  } catch (e) {
    console.error("Gemini correction error:", e);
    return null;
  }
}
