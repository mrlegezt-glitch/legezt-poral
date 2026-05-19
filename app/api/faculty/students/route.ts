import { NextRequest, NextResponse } from "next/server";
import { getPortalSession } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function GET() {
  const session = await getPortalSession();
  if (!session || session.role !== "faculty") return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const mappings = await prisma.facultyStudentMap.findMany({
    where: { facultyId: session.userId, isActive: true },
    include: {
      student: {
        select: { id: true, fullName: true, email: true, year: true, branch: true, enrollmentNo: true, phone: true, status: true, profilePhotoUrl: true, lastLoginAt: true },
      },
    },
  });

  const students = mappings.map((m) => m.student);
  return NextResponse.json({ students });
}
