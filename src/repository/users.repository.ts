/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const insertUser = async (userData: any) => {
  const insertedUser = await prisma.user.create({
    data: userData,
  });
  return insertedUser;
};
