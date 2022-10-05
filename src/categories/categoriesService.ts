import { Category } from "@prisma/client";
import HttpException from "../exceptions/httpException";
import { getCategoryByName, saveCategory } from "./categoriesRepository";

export const createCategory = async (
  category: Omit<Category, "id">
): Promise<Category> => {
  const existingCategory = await getCategoryByName(category.name);
  if (existingCategory) {
    throw new HttpException({
      message: "There is already a category with this name",
      status: 409,
    });
  }

  const newCategory = saveCategory(category);
  return newCategory;
};
