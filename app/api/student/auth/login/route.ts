import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { z } from "zod";
import prisma from "@/lib/prisma";
import { signAccessToken, signRefreshToken, checkRateLimit, resetRateLimit } from "@/lib/auth";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") ?? "unknown";
    console.log(`[Login] Request received from IP: ${ip}`);
    
    const rateCheck = checkRateLimit(ip);
    if (!rateCheck.allowed) {
      console.log(`[Login] Rate limit exceeded for IP: ${ip}`);
      return NextResponse.json(
        { error: `Too many attempts. Try again in ${Math.ceil((rateCheck.remainingMs ?? 0) / 60000)} minutes.` },
        { status: 429 }
      );
    }

    const body = await req.json().catch(() => null);
    const parsed = loginSchema.safeParse(body);
    if (!parsed.success) {
      console.log("[Login] Validation failed:", parsed.error.format());
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const { email, password } = parsed.data;
    console.log(`[Login] Attempting login for email: ${email}`);

    const student = await prisma.portalStudent.findUnique({ where: { email } });
    if (!student) {
      console.log(`[Login] No student found with email: ${email}`);
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    const isPasswordMatch = await bcrypt.compare(password, student.passwordHash);
    if (!isPasswordMatch) {
      console.log(`[Login] Password mismatch for email: ${email}`);
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    console.log(`[Login] Student found. Status: ${student.status}`);
    if (student.status === "email_unverified") {
      return NextResponse.json({ error: "Please verify your email address. Check your inbox and spam folder." }, { status: 403 });
    }
    if (student.status === "pending") {
      return NextResponse.json({ error: "Your account is pending admin approval. Please check back later." }, { status: 403 });
    }
    if (student.status === "suspended") {
      return NextResponse.json({ error: "Account suspended. Contact admin." }, { status: 403 });
    }

    resetRateLimit(ip);
    await prisma.portalStudent.update({ 
      where: { id: student.id }, 
      data: { lastLoginAt: new Date(), loginAttempts: 0 } 
    });

    console.log(`[Login] Signing tokens for student: ${student.id}`);
    const payload = { userId: student.id, role: "student" as const, username: student.username, email: student.email };
    const accessToken = signAccessToken(payload);
    const refreshToken = signRefreshToken(payload);

    const res = NextResponse.json({
      user: { 
        id: student.id, 
        username: student.username, 
        fullName: student.fullName, 
        email: student.email, 
        year: student.year, 
        branch: student.branch, 
        enrollmentNo: student.enrollmentNo, 
        profilePhotoUrl: student.profilePhotoUrl 
      },
    });

    const isProd = process.env.NODE_ENV === "production";
    console.log(`[Login] Setting cookies. Environment is production: ${isProd}`);

    res.cookies.set("portal_access_token", accessToken, { 
      httpOnly: true, 
      secure: isProd, 
      sameSite: "lax", 
      maxAge: 30 * 24 * 60 * 60 
    });
    res.cookies.set("portal_refresh_token", refreshToken, { 
      httpOnly: true, 
      secure: isProd, 
      sameSite: "lax", 
      maxAge: 90 * 24 * 60 * 60, 
      path: "/api/student/auth/refresh" 
    });

    console.log(`[Login] Login successful for email: ${email}`);
    return res;
  } catch (error: any) {
    console.error("[Login] Runtime error:", error);
    return NextResponse.json({ error: `Internal Server Error: ${error.message}` }, { status: 500 });
  }
}
