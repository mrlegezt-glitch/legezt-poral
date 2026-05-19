import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { z } from "zod";
import prisma from "@/lib/prisma";
import { COLLEGE_NAME, BRANCHES, YEARS } from "@/lib/constants";

const registerSchema = z.object({
  fullName: z.string().min(2).max(100),
  username: z.string().min(3).max(30).regex(/^[a-z0-9_]+$/),
  email: z.string().email(),
  password: z.string().min(8),
  phone: z.string().optional(),
  enrollmentNo: z.string().min(3).max(30),
  year: z.number().int().min(1).max(4),
  branch: z.enum(BRANCHES),
  bio: z.string().max(300).optional(),
  collegeName: z.string().optional(),
});

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const parsed = registerSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: parsed.error.issues[0]?.message ?? "Invalid input" }, { status: 400 });

  const d = parsed.data;

  const [existingEmail, existingUsername, existingEnrollment] = await Promise.all([
    prisma.portalStudent.findUnique({ where: { email: d.email } }),
    prisma.portalStudent.findUnique({ where: { username: d.username } }),
    prisma.portalStudent.findUnique({ where: { enrollmentNo: d.enrollmentNo } }),
  ]);

  if (existingEmail) return NextResponse.json({ error: "Email already registered" }, { status: 409 });
  if (existingUsername) return NextResponse.json({ error: "Username already taken" }, { status: 409 });
  if (existingEnrollment) return NextResponse.json({ error: "Enrollment number already registered" }, { status: 409 });

  const passwordHash = await bcrypt.hash(d.password, 12);

  const student = await prisma.portalStudent.create({
    data: {
      fullName: d.fullName, username: d.username, email: d.email, passwordHash,
      phone: d.phone, enrollmentNo: d.enrollmentNo, year: d.year,
      branch: d.branch, collegeName: d.collegeName || COLLEGE_NAME, bio: d.bio,
      status: "approved",
    },
    select: { id: true, fullName: true, email: true, username: true, status: true },
  });

  return NextResponse.json({ message: "Registration successful.", student }, { status: 201 });
}
