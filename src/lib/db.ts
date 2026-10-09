import { prisma } from '@/lib/prisma';

export async function getCounties() {
  return await prisma.countyData.findMany();
}

export async function getCountyByCode(code: string) {
  return await prisma.countyData.findUnique({
    where: { code },
  });
}

export async function getAlertsByCounty(countyCode: string) {
  return await prisma.alert.findMany({
    where: { countyCode, resolved: false },
    orderBy: { timestamp: 'desc' },
  });
}

export async function getUserPreferences(userId: string) {
  return await prisma.userPreferences.findUnique({
    where: { userId },
  });
}

export async function updateUserPreferences(
  userId: string,
  data: { favoriteCounties?: string[]; alertThreshold?: number }
) {
  return await prisma.userPreferences.update({
    where: { userId },
    data,
  });
}
