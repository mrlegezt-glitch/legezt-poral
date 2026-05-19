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
  const ip = req.headers.get("x-forwarded-for") ?? "unknown";
  const rateCheck = checkRateLimit(ip);
  if (!rateCheck.allowed) {
    return NextResponse.json(
      { error: `Too many attempts. Try again in ${Math.ceil((rateCheck.remainingMs ?? 0) / 60000)} minutes.` },
      { status: 429 }
    );
  }

  const body = await req.json().catch(() => null);
  const parsed = loginSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Invalid input" }, { status: 400 });

  const { email, password } = parsed.data;
  const student = await prisma.portalStudent.findUnique({ where: { email } });

  if (!student || !(await bcrypt.compare(password, student.passwordHash))) {
    return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
  }
  if (student.status === "pending") return NextResponse.json({ error: "Account pending admin approval" }, { status: 403 });
  if (student.status === "suspended") return NextResponse.json({ error: "Account suspended. Contact admin." }, { status: 403 });

  resetRateLimit(ip);
  await prisma.portalStudent.update({ where: { id: student.id }, data: { lastLoginAt: new Date(), loginAttempts: 0 } });

  const payload = { userId: student.id, role: "student" as const, username: student.username, email: student.email };
  const accessToken = signAccessToken(payload);
  const refreshToken = signRefreshToken(payload);

  const res = NextResponse.json({
    user: { id: student.id, username: student.username, fullName: student.fullName, email: student.email, year: student.year, branch: student.branch, enrollmentNo: student.enrollmentNo, profilePhotoUrl: student.profilePhotoUrl },
  });
  res.cookies.set("portal_access_token", accessToken, { httpOnly: true, secure: true, sameSite: "lax", maxAge: 900 });
  res.cookies.set("portal_refresh_token", refreshToken, { httpOnly: true, secure: true, sameSite: "lax", maxAge: 604800, path: "/api/student/auth/refresh" });
  return res;
}
