import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);
    if (!body || !body.email || !body.otp || !body.newPassword) {
      return NextResponse.json({ error: "Email, OTP and new password are required" }, { status: 400 });
    }

    const email = body.email.trim().toLowerCase();
    const otp = body.otp.trim();
    const newPassword = body.newPassword;

    if (newPassword.length < 8) {
      return NextResponse.json({ error: "Password must be at least 8 characters long" }, { status: 400 });
    }

    const student = await prisma.portalStudent.findFirst({
      where: {
        email,
        verificationToken: otp,
        verificationTokenExpires: {
          gt: new Date()
        }
      }
    });

    if (!student) {
      return NextResponse.json({ error: "Verification code is incorrect or has expired" }, { status: 400 });
    }

    // Hash the new password using bcrypt
    const passwordHash = await bcrypt.hash(newPassword, 12);

    // Update password and clear OTP tokens
    await prisma.portalStudent.update({
      where: { id: student.id },
      data: {
        passwordHash,
        verificationToken: null,
        verificationTokenExpires: null,
        // If they were pending email verification, mark them as approved
        status: student.status === "email_unverified" ? "approved" : student.status
      }
    });

    return NextResponse.json({
      success: true,
      message: "Your password has been successfully reset"
    });
  } catch (error: any) {
    console.error("[POST /api/student/auth/reset-password] Error:", error);
    return NextResponse.json({ error: "Internal server error occurred", details: error.message }, { status: 500 });
  }
}
