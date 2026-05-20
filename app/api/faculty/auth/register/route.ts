import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { z } from "zod";
import prisma from "@/lib/prisma";
import { COLLEGE_NAME, BRANCHES, DESIGNATIONS } from "@/lib/constants";

const registerSchema = z.object({
  fullName: z.string().min(2).max(100),
  username: z.string().min(3).max(30).regex(/^[a-z0-9_]+$/),
  workEmail: z.string().email(),
  password: z.string().min(8),
  phone: z.string().optional(),
  designation: z.enum(DESIGNATIONS),
  department: z.enum(BRANCHES),
  bio: z.string().max(300).optional(),
  collegeName: z.string().optional(),
});

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const parsed = registerSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: parsed.error.issues[0]?.message ?? "Invalid input" }, { status: 400 });

  const d = parsed.data;
  const [existingEmail, existingUsername] = await Promise.all([
    prisma.portalFaculty.findUnique({ where: { workEmail: d.workEmail } }),
    prisma.portalFaculty.findUnique({ where: { username: d.username } }),
  ]);

  if (existingEmail) return NextResponse.json({ error: "Email already registered" }, { status: 409 });
  if (existingUsername) return NextResponse.json({ error: "Username already taken" }, { status: 409 });

  const passwordHash = await bcrypt.hash(d.password, 12);
  const faculty = await prisma.portalFaculty.create({
    data: { fullName: d.fullName, username: d.username, workEmail: d.workEmail, passwordHash, phone: d.phone, designation: d.designation, department: d.department, collegeName: d.collegeName || COLLEGE_NAME, bio: d.bio, status: "pending" },
    select: { id: true, fullName: true, workEmail: true, username: true, status: true },
  });

  return NextResponse.json({ message: "Registration successful.", faculty }, { status: 201 });
}
