import { NextRequest, NextResponse } from "next/server";
import { getPortalSession } from "@/lib/auth";
import prisma from "@/lib/prisma";

// PUT: Accept or Reject a friend request
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await getPortalSession();
  if (!session || session.role !== "student") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const friendshipId = params.id;
  const myId = session.userId;

  try {
    const { status } = await req.json();
    if (status !== "ACCEPTED" && status !== "REJECTED") {
      return NextResponse.json({ error: "Invalid status payload" }, { status: 400 });
    }

    const friendship = await prisma.portalFriendship.findUnique({
      where: { id: friendshipId },
    });

    if (!friendship) {
      return NextResponse.json({ error: "Friendship record not found" }, { status: 404 });
    }

    // Security Check: Only the receiver can accept/reject a pending request!
    if (friendship.receiverId !== myId) {
      return NextResponse.json({ error: "Unauthorized friendship modifier action" }, { status: 403 });
    }

    if (friendship.status !== "PENDING") {
      return NextResponse.json({ error: "Friend request is already processed" }, { status: 400 });
    }

    const updated = await prisma.portalFriendship.update({
      where: { id: friendshipId },
      data: { status },
    });

    return NextResponse.json({ success: true, friendship: updated });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Server Error" }, { status: 500 });
  }
}

// DELETE: Unfriend OR Cancel friend request
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await getPortalSession();
  if (!session || session.role !== "student") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const friendshipId = params.id;
  const myId = session.userId;

  try {
    const friendship = await prisma.portalFriendship.findUnique({
      where: { id: friendshipId },
    });

    if (!friendship) {
      return NextResponse.json({ error: "Friendship record not found" }, { status: 404 });
    }

    // Security Check: Current student must be either the requester or receiver of this friendship!
    if (friendship.requesterId !== myId && friendship.receiverId !== myId) {
      return NextResponse.json({ error: "Unauthorized friendship removal action" }, { status: 403 });
    }

    await prisma.portalFriendship.delete({
      where: { id: friendshipId },
    });

    return NextResponse.json({ success: true, message: "Friendship severed successfully" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Server Error" }, { status: 500 });
  }
}
