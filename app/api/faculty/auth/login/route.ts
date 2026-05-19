import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { z } from "zod";
import prisma from "@/lib/prisma";
import { signAccessToken, signRefreshToken, checkRateLimit, resetRateLimit } from "@/lib/auth";

const loginSchema = z.object({ email: z.string().email(), password: z.string().min(1) });

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") ?? "unknown";
  const rateCheck = checkRateLimit(ip);
  if (!rateCheck.allowed) return NextResponse.json({ error: `Too many attempts. Try again in ${Math.ceil((rateCheck.remainingMs ?? 0) / 60000)} minutes.` }, { status: 429 });

  const body = await req.json().catch(() => null);
  const parsed = loginSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Invalid input" }, { status: 400 });

  const { email, password } = parsed.data;
  const faculty = await prisma.portalFaculty.findUnique({ where: { workEmail: email } });

  if (!faculty || !(await bcrypt.compare(password, faculty.passwordHash))) return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
  if (faculty.status === "pending") return NextResponse.json({ error: "Account pending admin approval" }, { status: 403 });
  if (faculty.status === "inactive") return NextResponse.json({ error: "Account deactivated. Contact admin." }, { status: 403 });

  resetRateLimit(ip);
  await prisma.portalFaculty.update({ where: { id: faculty.id }, data: { lastLoginAt: new Date() } });

  const payload = { userId: faculty.id, role: "faculty" as const, username: faculty.username, email: faculty.workEmail };
  const accessToken = signAccessToken(payload);
  const refreshToken = signRefreshToken(payload);

  const res = NextResponse.json({
    user: { id: faculty.id, username: faculty.username, fullName: faculty.fullName, email: faculty.workEmail, designation: faculty.designation, department: faculty.department, profilePhotoUrl: faculty.profilePhotoUrl },
  });
  res.cookies.set("portal_access_token", accessToken, { httpOnly: true, secure: true, sameSite: "lax", maxAge: 30 * 24 * 60 * 60 });
  res.cookies.set("portal_refresh_token", refreshToken, { httpOnly: true, secure: true, sameSite: "lax", maxAge: 90 * 24 * 60 * 60, path: "/api/faculty/auth/refresh" });
  return res;
}
