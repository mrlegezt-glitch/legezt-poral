const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  console.log("--- DB Student Records Check ---");
  try {
    const count = await prisma.portalStudent.count();
    console.log("Total Student Count:", count);
    
    const students = await prisma.portalStudent.findMany({
      select: {
        id: true,
        fullName: true,
        email: true,
        username: true,
        enrollmentNo: true,
        status: true,
        year: true,
        branch: true
      }
    });
    console.log("All Students in DB:", JSON.stringify(students, null, 2));

  } catch (error) {
    console.error("Query failed:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
