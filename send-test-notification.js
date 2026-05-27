const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  console.log("--- Sending Test Notification to all students ---");
  try {
    // Get all students
    const students = await prisma.portalStudent.findMany({
      select: { id: true, fullName: true, email: true }
    });

    if (students.length === 0) {
      console.log("No students found in DB!");
      return;
    }

    console.log(`Found ${students.length} student(s). Sending notification to all...`);

    for (const student of students) {
      const notif = await prisma.notification.create({
        data: {
          studentId: student.id,
          title: "🔔 LeGeZt Test Notification",
          message: `Namaste ${student.fullName}! Yeh ek test notification hai. App ka notification system perfectly kaam kar raha hai! 🚀`,
          isRead: false
        }
      });
      console.log(`✅ Notification sent to: ${student.fullName} (${student.email}) — ID: ${notif.id}`);
    }

    console.log("\nDone! Ab app mein notification aani chahiye (10 seconds ke andar polling se).");
  } catch (error) {
    console.error("Failed:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
