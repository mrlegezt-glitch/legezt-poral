import { NextRequest, NextResponse } from "next/server";
import { getPortalSession } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const session = await getPortalSession();
  if (!session) return NextResponse.json({ announcements: [] });

  let announcements: object[] = [];

  if (session.role === "student") {
    const student = await prisma.portalStudent.findUnique({ where: { id: session.userId }, select: { year: true, branch: true, assignedFacultyId: true } });
    if (student) {
      const raw = await prisma.announcement.findMany({
        where: {
          isActive: true,
          OR: [
            { targetYear: null },
            { targetYear: student.year },
          ],
          AND: [
            { OR: [{ targetBranch: null }, { targetBranch: student.branch }] },
          ],
        },
        orderBy: { createdAt: "desc" },
        take: 20,
        include: { faculty: { select: { fullName: true } } },
      });
      announcements = raw;
    }
  } else {
    const raw = await prisma.announcement.findMany({
      where: { facultyId: session.userId, isActive: true },
      orderBy: { createdAt: "desc" },
      take: 20,
      include: { faculty: { select: { fullName: true } } },
    });
    announcements = raw;
  }

  return NextResponse.json({ announcements });
}

export async function POST(req: NextRequest) {
  const session = await getPortalSession();
  if (!session || session.role !== "faculty") return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { title, content, targetYear, targetBranch } = await req.json();
  if (!title || !content) return NextResponse.json({ error: "Title and content required" }, { status: 400 });

  const announcement = await prisma.announcement.create({
    data: { title, content, facultyId: session.userId, targetYear: targetYear ?? undefined, targetBranch: targetBranch ?? undefined },
  });

  return NextResponse.json({ announcement }, { status: 201 });
}
