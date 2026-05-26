const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  console.log("--- DB Announcements Check ---");
  try {
    const count = await prisma.announcement.count();
    console.log("Total Announcements Count:", count);
    const announcements = await prisma.announcement.findMany({
      include: { faculty: true }
    });
    console.log("All Announcements:", JSON.stringify(announcements, null, 2));
  } catch (error) {
    console.error("Failed:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
