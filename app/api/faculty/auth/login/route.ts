import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { z } from "zod";
import prisma from "@/lib/prisma";
import { signAccessToken, signRefreshToken, checkRateLimit, resetRateLimit } from "@/lib/auth";

const loginSchema = z.object({ email: z.string().email(), password: z.string().min(1) });

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") ?? "unknown";
    console.log(`[Faculty Login] Request received from IP: ${ip}`);

    const rateCheck = checkRateLimit(ip);
    if (!rateCheck.allowed) {
      console.log(`[Faculty Login] Rate limit exceeded for IP: ${ip}`);
      return NextResponse.json(
        { error: `Too many attempts. Try again in ${Math.ceil((rateCheck.remainingMs ?? 0) / 60000)} minutes.` },
        { status: 429 }
      );
    }

    const body = await req.json().catch(() => null);
    const parsed = loginSchema.safeParse(body);
    if (!parsed.success) {
      console.log("[Faculty Login] Validation failed:", parsed.error.format());
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const { email, password } = parsed.data;
    console.log(`[Faculty Login] Attempting login for email: ${email}`);

    const faculty = await prisma.portalFaculty.findUnique({ where: { workEmail: email } });
    if (!faculty) {
      console.log(`[Faculty Login] No faculty found with email: ${email}`);
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    const isPasswordMatch = await bcrypt.compare(password, faculty.passwordHash);
    if (!isPasswordMatch) {
      console.log(`[Faculty Login] Password mismatch for email: ${email}`);
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    console.log(`[Faculty Login] Faculty found. Status: ${faculty.status}`);
    if (faculty.status === "pending") {
      return NextResponse.json({ error: "Account pending admin approval" }, { status: 403 });
    }
    if (faculty.status === "inactive") {
      return NextResponse.json({ error: "Account deactivated. Contact admin." }, { status: 403 });
    }

    resetRateLimit(ip);
    await prisma.portalFaculty.update({ 
      where: { id: faculty.id }, 
      data: { lastLoginAt: new Date() } 
    });

    console.log(`[Faculty Login] Signing tokens for faculty: ${faculty.id}`);
    const payload = { userId: faculty.id, role: "faculty" as const, username: faculty.username, email: faculty.workEmail };
    const accessToken = signAccessToken(payload);
    const refreshToken = signRefreshToken(payload);

    const res = NextResponse.json({
      user: { 
        id: faculty.id, 
        username: faculty.username, 
        fullName: faculty.fullName, 
        email: faculty.workEmail, 
        designation: faculty.designation, 
        department: faculty.department, 
        profilePhotoUrl: faculty.profilePhotoUrl 
      },
    });

    const isProd = process.env.NODE_ENV === "production";
    console.log(`[Faculty Login] Setting cookies. Environment is production: ${isProd}`);

    res.cookies.set("portal_access_token", accessToken, { 
      httpOnly: true, 
      secure: isProd, 
      sameSite: "lax", 
      maxAge: 30 * 24 * 60 * 60,
      path: "/"
    });
    res.cookies.set("portal_refresh_token", refreshToken, { 
      httpOnly: true, 
      secure: isProd, 
      sameSite: "lax", 
      maxAge: 90 * 24 * 60 * 60, 
      path: "/"
    });

    console.log(`[Faculty Login] Login successful for email: ${email}`);
    return res;
  } catch (error: any) {
    console.error("[Faculty Login] Runtime error:", error);
    return NextResponse.json({ error: `Internal Server Error: ${error.message}` }, { status: 500 });
  }
}
