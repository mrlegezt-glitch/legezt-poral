const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  console.log("--- MAPPING STUDENTS TO JIBRAAN ---");
  const facultyId = "6a0d94c83e227395dd8b3d0d"; // Jibraan ID
  const students = [
    "6a0cd73f0a15ef788ded0b47", // MOHHAMMED ANWAR UDDIN
    "6a0ced002d2026cbef152194", // shaikh salman
    "6a0cee8c554c6574508657ce"  // Shaista naaz
  ];

  for (const studentId of students) {
    try {
      const existing = await prisma.facultyStudentMap.findFirst({
        where: { facultyId, studentId }
      });

      if (!existing) {
        await prisma.facultyStudentMap.create({
          data: {
            facultyId,
            studentId,
            assignedBy: "Admin Seeder",
            isActive: true
          }
        });
        console.log(`Successfully mapped student ${studentId} to faculty ${facultyId}`);
      } else {
        console.log(`Student ${studentId} is already mapped to faculty ${facultyId}`);
      }
    } catch (e) {
      console.error(`Error mapping student ${studentId}:`, e);
    }
  }

  await prisma.$disconnect();
}

main();
