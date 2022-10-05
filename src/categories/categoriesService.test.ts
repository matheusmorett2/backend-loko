import { createCategory } from "./categoriesService";
import { getCategoryByName, saveCategory } from "./categoriesRepository";

jest.mock("./categoriesRepository");

describe("category service", () => {
  it("should create and return a new category", async () => {
    const categories = [
      {
        name: "category1",
      },
      {
        name: "category2",
      },
      {
        name: "category2",
      },
    ];

    for (const i in categories) {
      const category = categories[i];

      (getCategoryByName as jest.Mock).mockImplementationOnce(() => null);
      (saveCategory as jest.Mock).mockImplementationOnce(() => ({
        id: i,
        name: category.name,
      }));

      const createdCategory = await createCategory(category);

      expect(createdCategory).toMatchObject({
        id: i,
        name: category.name,
      });
    }
  });

  it("should throw error when already have a category with the same name", async () => {
    const category = {
      name: "category",
    };

    (getCategoryByName as jest.Mock).mockImplementationOnce(() => category);

    await expect(createCategory(category)).rejects.toThrow("There is already a category with this name");
  });
});
