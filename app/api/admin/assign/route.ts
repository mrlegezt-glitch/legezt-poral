import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { computeMatchScore } from "@/lib/constants";

// POST: Assign faculty to student + greedy suggestions
export async function POST(req: NextRequest) {
  const apiKey = req.headers.get("x-admin-api-key");
  if (apiKey !== process.env.ADMIN_API_KEY) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { facultyId, studentId, adminNote, adminUserId } = await req.json();
  if (!facultyId || !studentId) return NextResponse.json({ error: "facultyId and studentId required" }, { status: 400 });

  // Upsert mapping
  const mapping = await prisma.facultyStudentMap.upsert({
    where: { facultyId_studentId: { facultyId, studentId } },
    update: { isActive: true, adminNote, assignedBy: adminUserId ?? "admin" },
    create: { facultyId, studentId, adminNote, assignedBy: adminUserId ?? "admin", isActive: true },
  });

  // Update student's assignedFacultyId
  await prisma.portalStudent.update({ where: { id: studentId }, data: { assignedFacultyId: facultyId } });

  return NextResponse.json({ mapping }, { status: 201 });
}

// GET: Get greedy suggestions — best faculty matches for a student
export async function GET(req: NextRequest) {
  const apiKey = req.headers.get("x-admin-api-key");
  if (apiKey !== process.env.ADMIN_API_KEY) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const studentId = searchParams.get("studentId");
  if (!studentId) return NextResponse.json({ error: "studentId required" }, { status: 400 });

  const student = await prisma.portalStudent.findUnique({
    where: { id: studentId },
    select: { branch: true, collegeName: true, year: true },
  });
  if (!student) return NextResponse.json({ error: "Student not found" }, { status: 404 });

  const allFaculty = await prisma.portalFaculty.findMany({
    where: { status: "active" },
    select: { id: true, fullName: true, department: true, designation: true, collegeName: true, workEmail: true },
  });

  // Greedy: score all faculty and return sorted top 5
  const scored = allFaculty
    .map((f) => ({ ...f, score: computeMatchScore(f, student) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);

  return NextResponse.json({ suggestions: scored, student });
}

// DELETE: Remove assignment
export async function DELETE(req: NextRequest) {
  const apiKey = req.headers.get("x-admin-api-key");
  if (apiKey !== process.env.ADMIN_API_KEY) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { facultyId, studentId } = await req.json();
  await prisma.facultyStudentMap.updateMany({ where: { facultyId, studentId }, data: { isActive: false } });
  await prisma.portalStudent.update({ where: { id: studentId }, data: { assignedFacultyId: null } });
  return NextResponse.json({ message: "Assignment removed" });
}
