const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  console.log("--- Resetting Exam Submissions for Testing ---");
  try {
    const deleted = await prisma.examSubmission.deleteMany({});
    console.log(`Successfully deleted ${deleted.count} exam submissions from the database.`);
    
    // Also mark exams as active
    await prisma.exam.updateMany({
      data: { isActive: true }
    });
    console.log("All exams marked as Active.");

  } catch (error) {
    console.error("Database reset failed:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
