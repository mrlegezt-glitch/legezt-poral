import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// Public faculty info for students to see their assigned faculty
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

  const faculty = await prisma.portalFaculty.findUnique({
    where: { id },
    select: { id: true, fullName: true, designation: true, department: true, collegeName: true, workEmail: true },
  });

  if (!faculty) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ faculty });
}
