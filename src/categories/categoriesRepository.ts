import { Category } from "@prisma/client";
import PrismaClient from "./../../prisma.client";

export const saveCategory = async (
  category: Omit<Category, "id">
): Promise<Category> => {
  return await PrismaClient.category.create({
    data: category,
  });
};

export const getCategoryByName = async (
  name: string
): Promise<Category | null> => {
  return await PrismaClient.category.findFirst({
    where: {
      name,
    },
  });
};
