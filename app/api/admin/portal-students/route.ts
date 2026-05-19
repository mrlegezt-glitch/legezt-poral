import { NextRequest, NextResponse } from "next/server";
import { verifyAccessToken } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { computeMatchScore } from "@/lib/constants";

function getAdminSession(req: NextRequest) {
  const apiKey = req.headers.get("x-admin-api-key");
  if (apiKey === process.env.ADMIN_API_KEY) return true;
  const token = req.cookies.get("__session")?.value;
  if (token) {
    try { const p = verifyAccessToken(token); return !!p; } catch { return false; }
  }
  return false;
}

// GET: List all portal students
export async function GET(req: NextRequest) {
  const isAdmin = getAdminSession(req);
  if (!isAdmin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const students = await prisma.portalStudent.findMany({
    orderBy: { createdAt: "desc" },
    select: {
      id: true, fullName: true, username: true, email: true, enrollmentNo: true,
      year: true, branch: true, collegeName: true, status: true, assignedFacultyId: true,
      phone: true, createdAt: true, lastLoginAt: true,
    },
  });

  return NextResponse.json({ students, total: students.length });
}

// PATCH: Update student status (active/inactive/suspended)
export async function PATCH(req: NextRequest) {
  const isAdmin = getAdminSession(req);
  if (!isAdmin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { studentId, status } = await req.json();
  if (!studentId || !status) return NextResponse.json({ error: "Missing fields" }, { status: 400 });

  const updated = await prisma.portalStudent.update({
    where: { id: studentId }, data: { status },
    select: { id: true, status: true, fullName: true },
  });
  return NextResponse.json({ student: updated });
}
