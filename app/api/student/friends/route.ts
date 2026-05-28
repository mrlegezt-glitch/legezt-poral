import { NextRequest, NextResponse } from "next/server";
import { getPortalSession } from "@/lib/auth";
import prisma from "@/lib/prisma";

// GET: List friends/requests OR Search classmates
export async function GET(req: NextRequest) {
  const session = await getPortalSession();
  if (!session || session.role !== "student") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const myId = session.userId;
  const { searchParams } = new URL(req.url);
  const search = searchParams.get("search");

  try {
    if (search && search.trim().length > 0) {
      const query = search.trim();
      
      // Search students in the same college (exclude self)
      const students = await prisma.portalStudent.findMany({
        where: {
          status: "approved",
          id: { not: myId },
          OR: [
            { fullName: { contains: query, mode: "insensitive" } },
            { username: { contains: query, mode: "insensitive" } },
            { email: { contains: query, mode: "insensitive" } },
            { enrollmentNo: { contains: query, mode: "insensitive" } },
          ],
        },
        select: {
          id: true,
          fullName: true,
          username: true,
          email: true,
          year: true,
          branch: true,
        },
        take: 15,
      });

      // Fetch all friendships involving me to determine status with each search result
      const friendships = await prisma.portalFriendship.findMany({
        where: {
          OR: [
            { requesterId: myId },
            { receiverId: myId },
          ],
        },
      });

      const results = students.map((stu) => {
        const rel = friendships.find(
          (f) =>
            (f.requesterId === myId && f.receiverId === stu.id) ||
            (f.requesterId === stu.id && f.receiverId === myId)
        );

        let friendshipStatus = "NONE";
        let friendshipId = null;

        if (rel) {
          friendshipId = rel.id;
          if (rel.status === "ACCEPTED") {
            friendshipStatus = "ACCEPTED";
          } else if (rel.status === "PENDING") {
            friendshipStatus = rel.requesterId === myId ? "PENDING_SENT" : "PENDING_RECEIVED";
          } else if (rel.status === "REJECTED") {
            friendshipStatus = "REJECTED";
          }
        }

        return {
          ...stu,
          friendshipStatus,
          friendshipId,
        };
      });

      return NextResponse.json({ results });
    }

    // Default: List active friends and pending requests
    const allFriendships = await prisma.portalFriendship.findMany({
      where: {
        OR: [
          { requesterId: myId },
          { receiverId: myId },
        ],
      },
    });

    const activeFriendIds: string[] = [];
    const incomingRequests: any[] = [];
    const outgoingRequests: any[] = [];

    allFriendships.forEach((f) => {
      if (f.status === "ACCEPTED") {
        activeFriendIds.push(f.requesterId === myId ? f.receiverId : f.requesterId);
      } else if (f.status === "PENDING") {
        if (f.receiverId === myId) {
          incomingRequests.push(f);
        } else {
          outgoingRequests.push(f);
        }
      }
    });

    // Fetch details of active friends
    const friendsDetails = await prisma.portalStudent.findMany({
      where: { id: { in: activeFriendIds } },
      select: {
        id: true,
        fullName: true,
        username: true,
        email: true,
        year: true,
        branch: true,
      },
    });

    const friends = friendsDetails.map((friend) => {
      const rel = allFriendships.find(
        (f) =>
          f.status === "ACCEPTED" &&
          ((f.requesterId === myId && f.receiverId === friend.id) ||
            (f.requesterId === friend.id && f.receiverId === myId))
      );
      return {
        ...friend,
        friendshipId: rel?.id || null,
      };
    });

    // Fetch details for incoming requests
    const incomingRequesterIds = incomingRequests.map((r) => r.requesterId);
    const incomingDetails = await prisma.portalStudent.findMany({
      where: { id: { in: incomingRequesterIds } },
      select: {
        id: true,
        fullName: true,
        username: true,
        email: true,
        year: true,
        branch: true,
      },
    });

    const incoming = incomingRequests.map((r) => {
      const detail = incomingDetails.find((d) => d.id === r.requesterId);
      return {
        id: r.id,
        createdAt: r.createdAt,
        sender: detail || { id: r.requesterId, fullName: "Classmate", username: "classmate" },
      };
    });

    // Fetch details for outgoing requests
    const outgoingReceiverIds = outgoingRequests.map((r) => r.receiverId);
    const outgoingDetails = await prisma.portalStudent.findMany({
      where: { id: { in: outgoingReceiverIds } },
      select: {
        id: true,
        fullName: true,
        username: true,
        email: true,
        year: true,
        branch: true,
      },
    });

    const outgoing = outgoingRequests.map((r) => {
      const detail = outgoingDetails.find((d) => d.id === r.receiverId);
      return {
        id: r.id,
        createdAt: r.createdAt,
        receiver: detail || { id: r.receiverId, fullName: "Classmate", username: "classmate" },
      };
    });

    return NextResponse.json({
      friends,
      incoming,
      outgoing,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Server Error" }, { status: 500 });
  }
}

// POST: Send a friend request
export async function POST(req: NextRequest) {
  const session = await getPortalSession();
  if (!session || session.role !== "student") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { studentId } = await req.json();
    if (!studentId) {
      return NextResponse.json({ error: "Missing target studentId" }, { status: 400 });
    }

    const myId = session.userId;
    if (studentId === myId) {
      return NextResponse.json({ error: "Cannot add yourself as a friend" }, { status: 400 });
    }

    // Check if friendship already exists
    const existing = await prisma.portalFriendship.findFirst({
      where: {
        OR: [
          { requesterId: myId, receiverId: studentId },
          { requesterId: studentId, receiverId: myId },
        ],
      },
    });

    if (existing) {
      if (existing.status === "ACCEPTED") {
        return NextResponse.json({ error: "Already friends" }, { status: 400 });
      } else if (existing.status === "PENDING") {
        return NextResponse.json({ error: "Friend request already active" }, { status: 400 });
      } else {
        // REJECTED: Reset to pending
        const updated = await prisma.portalFriendship.update({
          where: { id: existing.id },
          data: {
            requesterId: myId,
            receiverId: studentId,
            status: "PENDING",
          },
        });
        return NextResponse.json({ success: true, friendship: updated });
      }
    }

    // Create new friend request
    const friendship = await prisma.portalFriendship.create({
      data: {
        requesterId: myId,
        receiverId: studentId,
        status: "PENDING",
      },
    });

    return NextResponse.json({ success: true, friendship }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Server Error" }, { status: 500 });
  }
}
