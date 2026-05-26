const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  console.log("--- DB DIAGNOSTIC FOR SUBMISSIONS ---");
  try {
    const submissions = await prisma.examSubmission.findMany({
      include: {
        exam: {
          select: { id: true, title: true }
        },
        student: {
          select: { id: true, fullName: true, enrollmentNo: true }
        }
      }
    });
    console.log("All Submissions in DB:", JSON.stringify(submissions, null, 2));

  } catch (error) {
    console.error("Diagnostic query failed:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
