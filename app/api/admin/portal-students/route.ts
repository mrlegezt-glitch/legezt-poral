import { NextRequest, NextResponse } from "next/server";
import { verifyAccessToken } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { computeMatchScore } from "@/lib/constants";

async function getAdminSession(req: NextRequest) {
  const apiKey = req.headers.get("x-admin-api-key");
  if (apiKey === process.env.ADMIN_API_KEY) return true;
  const token = req.cookies.get("__session")?.value;
  if (token) {
    try { const p = await verifyAccessToken(token); return !!p; } catch { return false; }
  }
  return false;
}

// GET: List all portal students
export async function GET(req: NextRequest) {
  const isAdmin = await getAdminSession(req);
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

// PATCH: Update student fields or status
export async function PATCH(req: NextRequest) {
  const isAdmin = await getAdminSession(req);
  if (!isAdmin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { studentId, status, fullName, username, email, enrollmentNo, year, branch } = await req.json();
  if (!studentId) return NextResponse.json({ error: "Missing studentId" }, { status: 400 });

  const updateData: any = {};
  if (status !== undefined) updateData.status = status;
  if (fullName !== undefined) updateData.fullName = fullName;
  if (username !== undefined) updateData.username = username;
  if (email !== undefined) updateData.email = email;
  if (enrollmentNo !== undefined) updateData.enrollmentNo = enrollmentNo;
  if (year !== undefined) updateData.year = parseInt(year);
  if (branch !== undefined) updateData.branch = branch;

  const updated = await prisma.portalStudent.update({
    where: { id: studentId },
    data: updateData,
    select: {
      id: true, fullName: true, username: true, email: true, enrollmentNo: true,
      year: true, branch: true, status: true
    },
  });
  return NextResponse.json({ student: updated });
}

// DELETE: Delete a portal student and all related data
export async function DELETE(req: NextRequest) {
  const isAdmin = await getAdminSession(req);
  if (!isAdmin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { studentId } = await req.json();
  if (!studentId) return NextResponse.json({ error: "Missing studentId" }, { status: 400 });

  await prisma.$transaction([
    prisma.facultyStudentMap.deleteMany({ where: { studentId } }),
    prisma.studentAnnouncement.deleteMany({ where: { studentId } }),
    prisma.attendanceRecord.deleteMany({ where: { studentId } }),
    prisma.assignmentSubmission.deleteMany({ where: { studentId } }),
    prisma.portalMessage.deleteMany({ where: { OR: [{ senderStudentId: studentId }, { receiverStudentId: studentId }] } }),
    prisma.portalDocument.deleteMany({ where: { uploaderStudentId: studentId } }),
    prisma.portalStudent.delete({ where: { id: studentId } })
  ]);

  return NextResponse.json({ message: "Student deleted successfully" });
}
