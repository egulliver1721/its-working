import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function createVan() {
  const newVan = await prisma.van.create({
    data: {
      name: "Van Name",
      price: 100,
      description: "Van Description",
      type: "simple",
    },
  });
  console.log(`Created van with id: ${newVan.id}`);
}

createVan()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
