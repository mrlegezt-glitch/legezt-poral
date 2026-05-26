const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  console.log("--- DB Document Collection Check ---");
  try {
    const documentsCount = await prisma.document.count();
    console.log("Main Document Model Count:", documentsCount);
    const documents = await prisma.document.findMany({ take: 5 });
    console.log("Sample Main Documents:", JSON.stringify(documents, null, 2));

    const portalDocsCount = await prisma.portalDocument.count();
    console.log("PortalDocument Model Count:", portalDocsCount);
    const portalDocs = await prisma.portalDocument.findMany({ take: 5 });
    console.log("Sample Portal Documents:", JSON.stringify(portalDocs, null, 2));

    console.log("--- Check isPublic and category filter combinations ---");
    const activePublicDocs = await prisma.document.findMany({ where: { isPublic: true } });
    console.log("Public Main Documents Count:", activePublicDocs.length);

    const activePublicPortalDocs = await prisma.portalDocument.findMany({ where: { isPublic: true } });
    console.log("Public Portal Documents Count:", activePublicPortalDocs.length);

  } catch (error) {
    console.error("Prisma query failed:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
