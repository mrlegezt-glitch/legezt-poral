import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");

  const proto = req.headers.get("x-forwarded-proto") || "https";
  const host = req.headers.get("x-forwarded-host") || req.headers.get("host") || "portal.mrlegezt.me";
  const baseUrl = `${proto}://${host}`;

  if (!token) {
    return NextResponse.redirect(new URL("/student/login?error=invalid_token", baseUrl));
  }

  // Find student with matching token and unexpired
  const student = await prisma.portalStudent.findFirst({
    where: {
      verificationToken: token,
      verificationTokenExpires: {
        gt: new Date()
      }
    }
  });

  if (!student) {
    return NextResponse.redirect(new URL("/student/login?error=token_expired", baseUrl));
  }

  // Update status to approved and clear token
  await prisma.portalStudent.update({
    where: { id: student.id },
    data: {
      status: "approved",
      verificationToken: null,
      verificationTokenExpires: null
    }
  });

  return NextResponse.redirect(new URL("/student/login?success=email_verified", baseUrl));
}
