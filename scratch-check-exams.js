const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  console.log("--- DB Exam System Check ---");
  try {
    const examsCount = await prisma.exam.count();
    console.log("Total Exams Count:", examsCount);
    const exams = await prisma.exam.findMany({
      include: { questions: true }
    });
    console.log("All Exams in DB:", JSON.stringify(exams, null, 2));

    const submissionsCount = await prisma.examSubmission.count();
    console.log("Total Exam Submissions Count:", submissionsCount);
    const submissions = await prisma.examSubmission.findMany();
    console.log("All Submissions in DB:", JSON.stringify(submissions, null, 2));

  } catch (error) {
    console.error("Prisma query failed:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
