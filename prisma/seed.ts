import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const products = [
    {
      title: 'Camisa Brasil',
      description: 'Bom estado de conservação.',
      price: 300.00,
      createdAt: new Date(),
    },
    {
      title: 'Camisa Fluminense',
      description: 'Excelente estado de conservação.',
      price: 450.00,
      createdAt: new Date(),
    },
    {
      title: 'Camisa Milan',
      description: 'Usada algumas vezes.',
      price: 199.99,
      createdAt: new Date(),
    },
    {
      title: 'Camisa Inglaterra',
      description: 'Excelente estado de conservação.',
      price: 399.99,
      createdAt: new Date(),
    },
    {
      title: 'Camisa Barcelona',
      description: 'Excelente estado de conservação.',
      price: 499.99,
      createdAt: new Date(),
    },
    {
      title: 'Camisa Japão',
      description: 'Excelente estado de conservação.',
      price: 129.99,
      createdAt: new Date(),
    },
    {
      title: 'Camisa Real Madrid',
      description: 'Excelente estado de conservação.',
      price: 599.99,
      createdAt: new Date(),
    },
    {
      title: 'Camisa Manchester City',
      description: 'Excelente estado de conservação.',
      price: 349.99,
      createdAt: new Date(),
    },
    {
      title: 'Camisa Cruzeiro',
      description: 'Excelente estado de conservação.',
      price: 249.99,
      createdAt: new Date(),
    },
    {
      title: 'Camisa Atletico Mineiro',
      description: 'Excelente estado de conservação.',
      price: 279.99,
      createdAt: new Date(),
    },
    {
      title: 'Camisa Atletico de Madrid',
      description: 'Excelente estado de conservação.',
      price: 279.99,
      createdAt: new Date(),
    },
  ];

  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
