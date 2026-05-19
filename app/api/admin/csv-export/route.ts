import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET: Stream CSV of all portal students
export async function GET(req: NextRequest) {
  const apiKey = req.headers.get("x-admin-api-key");
  if (apiKey !== process.env.ADMIN_API_KEY) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const students = await prisma.portalStudent.findMany({
    orderBy: { createdAt: "desc" },
    select: {
      fullName: true, username: true, email: true, phone: true,
      enrollmentNo: true, year: true, branch: true, collegeName: true,
      status: true, assignedFacultyId: true, createdAt: true, lastLoginAt: true,
    },
  });

  // Greedy chunked CSV generation
  const header = ["Full Name", "Username", "Email", "Phone", "Enrollment No", "Year", "Branch", "College", "Status", "Assigned Faculty ID", "Registered On", "Last Login"];
  const rows = students.map((s) => [
    s.fullName, s.username, s.email, s.phone ?? "",
    s.enrollmentNo, s.year.toString(), s.branch, s.collegeName,
    s.status, s.assignedFacultyId ?? "",
    s.createdAt.toISOString().split("T")[0],
    s.lastLoginAt ? s.lastLoginAt.toISOString().split("T")[0] : "",
  ].map((v) => `"${v.replace(/"/g, '""')}"`).join(","));

  const csv = [header.join(","), ...rows].join("\n");
  const date = new Date().toISOString().split("T")[0];

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="portal-students-${date}.csv"`,
    },
  });
}
