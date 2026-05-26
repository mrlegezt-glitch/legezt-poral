const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function testApi() {
  console.log("Simulating GET /api/documents API Route...");
  try {
    // 1. Suppose a student is logged in, let's pick a student from DB
    const student = await prisma.portalStudent.findFirst();
    if (!student) {
      console.log("No students in DB to simulate session!");
      return;
    }
    console.log(`Simulating session for Student: ${student.fullName} (ID: ${student.id}, Year: ${student.year}, Branch: ${student.branch})`);

    const session = { userId: student.id, role: "student" };

    // Simulating GET logic from portal/app/api/documents/route.ts
    const orConditions = [{ isPublic: true }];
    if (session.role === "student") {
      orConditions.push({ sharedWith: { has: session.userId } });
      orConditions.push({ uploaderStudentId: session.userId });
    }

    let docs = await prisma.portalDocument.findMany({
      where: {
        OR: orConditions
      },
      orderBy: { createdAt: "desc" }
    });

    console.log("Matching Portal Documents Count:", docs.length);

    const adminDocs = await prisma.document.findMany({
      where: {
        isPublic: true
      },
      orderBy: { createdAt: "desc" }
    });

    console.log("Matching Admin Documents Count:", adminDocs.length);

    let combinedDocs = [
      ...docs.map((d) => ({ ...d, source: "portal" })),
      ...adminDocs.map((d) => ({
        id: d.id,
        title: d.title,
        description: d.description,
        fileUrl: d.fileUrl,
        fileName: d.fileName,
        fileSize: d.fileSize,
        mimeType: d.fileName.endsWith(".pdf") ? "application/pdf" : "application/octet-stream",
        category: d.category,
        year: null,
        branch: null,
        batch: null,
        collegeName: "Lords Institute of Engineering and Technology",
        isPublic: d.isPublic,
        sharedWith: [],
        uploaderStudentId: null,
        uploaderFacultyId: null,
        downloads: d.downloads,
        createdAt: d.createdAt,
        updatedAt: d.updatedAt,
        source: "admin",
      })),
    ];

    console.log("Merged Documents Count:", combinedDocs.length);
    console.log("Merged Documents list:", JSON.stringify(combinedDocs, null, 2));

  } catch (error) {
    console.error("Test failed:", error);
  } finally {
    await prisma.$disconnect();
  }
}

testApi();
