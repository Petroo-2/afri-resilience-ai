import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const kenyaCounties = require('./seed-data');

async function seedCounties() {
  console.log('Seeding Kenya county data...');

  for (const county of kenyaCounties) {
    await prisma.countyData.upsert({
      where: { code: county.code },
      update: county,
      create: {
        ...county,
        alerts: Math.floor(Math.random() * 5),
        communities: Math.floor(Math.random() * 200) + 50,
        interventions: Math.floor(Math.random() * 20) + 5,
      },
    });
  }

  console.log(`✓ Seeded ${kenyaCounties.length} Kenya counties`);
}

async function main() {
  try {
    await seedCounties();
    console.log('✓ Database seeding completed');
  } catch (e) {
    console.error('✗ Seeding failed:', e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
