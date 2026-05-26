import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { sendOtpEmail } from "@/lib/mail";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);
    if (!body || !body.email) {
      return NextResponse.json({ error: "Email parameter is required" }, { status: 400 });
    }

    const email = body.email.trim().toLowerCase();

    const student = await prisma.portalStudent.findUnique({
      where: { email }
    });

    if (!student) {
      return NextResponse.json({ error: "Student account with this email does not exist" }, { status: 404 });
    }

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes from now

    // Save to student record
    await prisma.portalStudent.update({
      where: { id: student.id },
      data: {
        verificationToken: otp,
        verificationTokenExpires: expires
      }
    });

    // Send email asynchronously
    try {
      await sendOtpEmail(student.email, otp, student.fullName);
    } catch (mailError) {
      console.error("[ForgotPassword] Failed to send email:", mailError);
      // We don't fail the request, but we return a warning in the console logs
    }

    return NextResponse.json({
      success: true,
      message: "One-time passcode sent successfully to your registered email"
    });
  } catch (error: any) {
    console.error("[POST /api/student/auth/forgot-password] Error:", error);
    return NextResponse.json({ error: "Internal server error occurred", details: error.message }, { status: 500 });
  }
}
