import { NextRequest, NextResponse } from "next/server";
import { verifyAccessToken } from "@/lib/auth";
import prisma from "@/lib/prisma";

async function getAdminSession(req: NextRequest) {
  const apiKey = req.headers.get("x-admin-api-key");
  if (apiKey === process.env.ADMIN_API_KEY) return true;
  const token = req.cookies.get("__session")?.value;
  if (token) {
    try {
      const p = await verifyAccessToken(token);
      return !!p;
    } catch {
      return false;
    }
  }
  return false;
}

// GET: List all portal faculties
export async function GET(req: NextRequest) {
  try {
    const isAdmin = await getAdminSession(req);
    if (!isAdmin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const faculties = await prisma.portalFaculty.findMany({
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        fullName: true,
        username: true,
        workEmail: true,
        designation: true,
        department: true,
        collegeName: true,
        status: true,
        phone: true,
        createdAt: true,
        lastLoginAt: true,
      },
    });

    return NextResponse.json({ faculties, total: faculties.length });
  } catch (error: any) {
    console.error("GET /api/admin/portal-faculties error:", error);
    return NextResponse.json({ error: error.message || "Failed to fetch portal faculties" }, { status: 500 });
  }
}

// PATCH: Update faculty fields or status
export async function PATCH(req: NextRequest) {
  try {
    const isAdmin = await getAdminSession(req);
    if (!isAdmin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await req.json();
    const { facultyId, status, fullName, username, workEmail, designation, department, phone } = body;
    if (!facultyId) return NextResponse.json({ error: "Missing facultyId" }, { status: 400 });

    const updateData: any = {};
    if (status !== undefined) updateData.status = status;
    if (fullName !== undefined) updateData.fullName = fullName;
    if (username !== undefined) updateData.username = username;
    if (workEmail !== undefined) updateData.workEmail = workEmail;
    if (designation !== undefined) updateData.designation = designation;
    if (department !== undefined) updateData.department = department;
    if (phone !== undefined) updateData.phone = phone;

    const updated = await prisma.portalFaculty.update({
      where: { id: facultyId },
      data: updateData,
      select: {
        id: true,
        fullName: true,
        username: true,
        workEmail: true,
        designation: true,
        department: true,
        status: true,
      },
    });
    return NextResponse.json({ faculty: updated });
  } catch (error: any) {
    console.error("PATCH /api/admin/portal-faculties error:", error);
    return NextResponse.json({ error: error.message || "Failed to update portal faculty" }, { status: 500 });
  }
}

// DELETE: Delete a portal faculty and all related data
export async function DELETE(req: NextRequest) {
  try {
    const isAdmin = await getAdminSession(req);
    if (!isAdmin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await req.json();
    const { facultyId } = body;
    if (!facultyId) return NextResponse.json({ error: "Missing facultyId" }, { status: 400 });

    await prisma.$transaction([
      prisma.facultyStudentMap.deleteMany({ where: { facultyId } }),
      prisma.announcement.deleteMany({ where: { facultyId } }),
      prisma.attendanceRecord.deleteMany({ where: { facultyId } }),
      prisma.assignment.deleteMany({ where: { facultyId } }),
      prisma.portalMessage.deleteMany({ where: { OR: [{ senderFacultyId: facultyId }, { receiverFacultyId: facultyId }] } }),
      prisma.portalDocument.deleteMany({ where: { uploaderFacultyId: facultyId } }),
      prisma.portalFaculty.delete({ where: { id: facultyId } }),
    ]);

    return NextResponse.json({ message: "Faculty deleted successfully" });
  } catch (error: any) {
    console.error("DELETE /api/admin/portal-faculties error:", error);
    return NextResponse.json({ error: error.message || "Failed to delete portal faculty" }, { status: 500 });
  }
}
