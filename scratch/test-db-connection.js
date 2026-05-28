const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function run() {
  try {
    console.log("Connecting to database...");
    const count = await prisma.aiChatMessage.count();
    console.log("Success! Total AI chat messages in DB:", count);
  } catch (err) {
    console.error("Prisma Database Connection Error:", err.message);
  } finally {
    await prisma.$disconnect();
  }
}

run();
