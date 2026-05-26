const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  console.log("--- DB DIAGNOSTIC FOR FACULTY SYSTEM ---");
  try {
    const faculties = await prisma.portalFaculty.findMany({
      select: { id: true, username: true, fullName: true }
    });
    console.log("Portal Faculties:", JSON.stringify(faculties, null, 2));

    const students = await prisma.portalStudent.findMany({
      select: { id: true, username: true, fullName: true }
    });
    console.log("Portal Students:", JSON.stringify(students, null, 2));

    const maps = await prisma.facultyStudentMap.findMany({});
    console.log("Faculty Student Mappings:", JSON.stringify(maps, null, 2));

    const exams = await prisma.exam.findMany({});
    console.log("Surprise Exams in Database:", JSON.stringify(exams, null, 2));

  } catch (error) {
    console.error("Diagnostic query failed:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
