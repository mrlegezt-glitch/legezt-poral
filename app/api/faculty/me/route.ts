import { NextRequest, NextResponse } from "next/server";
import { getPortalSession } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function GET() {
  const session = await getPortalSession();
  if (!session || session.role !== "faculty") return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const faculty = await prisma.portalFaculty.findUnique({
    where: { id: session.userId },
    select: {
      id: true,
      fullName: true,
      username: true,
      workEmail: true,
      phone: true,
      designation: true,
      department: true,
      collegeName: true,
      profilePhotoUrl: true,
      bio: true,
      status: true,
      lastLoginAt: true,
      createdAt: true,
      exams: {
        select: {
          id: true,
          title: true,
          durationMins: true,
          latitude: true,
          longitude: true,
          radiusMeters: true,
          createdAt: true,
          _count: {
            select: {
              submissions: true
            }
          }
        },
        orderBy: {
          createdAt: "desc"
        }
      }
    },
  });

  if (!faculty) return NextResponse.json({ error: "Not found" }, { status: 404 });

  // Get count of assigned students
  const studentCount = await prisma.facultyStudentMap.count({ where: { facultyId: session.userId, isActive: true } });

  return NextResponse.json({ faculty: { ...faculty, studentCount } });
}
