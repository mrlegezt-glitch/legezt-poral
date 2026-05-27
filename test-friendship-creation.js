const fs = require('fs');
try {
  const envContent = fs.readFileSync('.env.local', 'utf8');
  envContent.split('\n').forEach(line => {
    line = line.trim();
    if (!line || line.startsWith('#')) return;
    const idx = line.indexOf('=');
    if (idx === -1) return;
    const key = line.slice(0, idx).trim();
    let val = line.slice(idx + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    process.env[key] = val;
  });
} catch (e) {
  console.warn("Could not load .env.local manually:", e.message);
}

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const students = await prisma.portalStudent.findMany({ take: 2 });
  if (students.length < 2) {
    console.log("Not enough students found in DB to test!");
    return;
  }
  const s1 = students[0];
  const s2 = students[1];
  console.log(`Testing friendship creation between: ${s1.fullName} (${s1.id}) and ${s2.fullName} (${s2.id})`);
  
  try {
    const friendship = await prisma.portalFriendship.create({
      data: {
        requesterId: s1.id,
        receiverId: s2.id,
        status: "PENDING"
      }
    });
    console.log("Friendship created successfully!", friendship);
    
    // Clean up
    await prisma.portalFriendship.delete({ where: { id: friendship.id } });
    console.log("Friendship cleaned up successfully!");
  } catch (error) {
    console.error("Prisma error during friendship creation:", error);
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
