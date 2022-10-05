import { getCategoryByName, saveCategory } from "./categoriesRepository";
import { prismaMock } from "../../singleton";
import { Category } from "@prisma/client";

describe("categories repository", () => {
  it("should create category", async () => {
    const category = {
      name: "category",
    };

    prismaMock.category.create.mockResolvedValue(category as Category);

    const newCategory = await saveCategory(category);
    expect(newCategory.name).toEqual(category.name);
  });

  it("should get category by name", async () => {
    const category = {
      name: "category",
    };

    prismaMock.category.findFirst.mockResolvedValue(category as Category);
    const foundCategory = await getCategoryByName(category.name);

    expect(foundCategory?.name).toEqual(category.name);
  });

  it("should return null when get non existent category", async () => {
    const category = {
      name: "categoryNotFound",
    };

    prismaMock.category.findFirst.mockResolvedValue(null);
    const foundCategory = await getCategoryByName(category.name);

    expect(foundCategory).toBe(null);
  });
});
