import { NextRequest, NextResponse } from "next/server";
import { getPortalSession } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const session = await getPortalSession();
  if (!session || session.role !== "student") return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const student = await prisma.portalStudent.findUnique({
    where: { id: session.userId },
    select: { id: true, fullName: true, username: true, email: true, phone: true, enrollmentNo: true, year: true, branch: true, collegeName: true, profilePhotoUrl: true, bio: true, status: true, assignedFacultyId: true, lastLoginAt: true, createdAt: true },
  });

  if (!student) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({
    student: {
      ...student,
      collegeLogoUrl: "/lords_logo.png"
    }
  });
}
