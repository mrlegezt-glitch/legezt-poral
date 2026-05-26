const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");
const prisma = new PrismaClient();

async function main() {
  console.log("--- Resetting Shaikh Salman Password to legezt123 ---");
  try {
    const student = await prisma.portalStudent.findFirst({
      where: { enrollmentNo: "160924733431" }
    });

    if (!student) {
      console.log("Student not found!");
      return;
    }

    const newHash = await bcrypt.hash("legezt123", 12);

    await prisma.portalStudent.update({
      where: { id: student.id },
      data: { passwordHash: newHash }
    });

    console.log(`Successfully updated password for ${student.fullName} (${student.email}) to "legezt123"!`);

  } catch (error) {
    console.error("Password reset failed:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
