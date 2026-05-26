import { NextRequest, NextResponse } from "next/server";
import { getPortalSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import crypto from "crypto";

// GET: Fetch requested service tickets for logged in student
export async function GET(req: NextRequest) {
  try {
    const session = await getPortalSession();
    if (!session || session.role !== "student") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const services = await prisma.portalServiceRequest.findMany({
      where: { studentId: session.userId },
      orderBy: { createdAt: "desc" }
    });

    // Match CollegeService Android model structure
    const formattedServices = services.map(s => ({
      id: s.id,
      title: s.title,
      description: s.description,
      status: s.status,
      category: s.category,
      refNo: s.refNo,
      submissionDate: s.submissionDate.toISOString().split("T")[0]
    }));

    return NextResponse.json(formattedServices);
  } catch (error: any) {
    console.error("[GET /api/student/services] Error:", error);
    return NextResponse.json({ error: "Failed to fetch services", details: error.message }, { status: 500 });
  }
}

// POST: Request a new service ticket
export async function POST(req: NextRequest) {
  try {
    const session = await getPortalSession();
    if (!session || session.role !== "student") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json().catch(() => null);
    if (!body || !body.title || !body.description || !body.category) {
      return NextResponse.json({ error: "Title, description and category are required" }, { status: 400 });
    }

    const refNo = `REF-REQ-${Math.floor(10000 + Math.random() * 90000)}`;

    const newTicket = await prisma.portalServiceRequest.create({
      data: {
        studentId: session.userId,
        title: body.title,
        description: body.description,
        category: body.category,
        status: "PENDING",
        refNo
      }
    });

    const formatted = {
      id: newTicket.id,
      title: newTicket.title,
      description: newTicket.description,
      status: newTicket.status,
      category: newTicket.category,
      refNo: newTicket.refNo,
      submissionDate: newTicket.submissionDate.toISOString().split("T")[0]
    };

    return NextResponse.json(formatted, { status: 201 });
  } catch (error: any) {
    console.error("[POST /api/student/services] Error:", error);
    return NextResponse.json({ error: "Failed to submit service request", details: error.message }, { status: 500 });
  }
}
