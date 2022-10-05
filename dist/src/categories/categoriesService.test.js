"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const categoriesService_1 = require("./categoriesService");
const categoriesRepository_1 = require("./categoriesRepository");
jest.mock("./categoriesRepository");
describe("category service", () => {
    it("should create and return a new category", () => __awaiter(void 0, void 0, void 0, function* () {
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
            categoriesRepository_1.getCategoryByName.mockImplementationOnce(() => null);
            categoriesRepository_1.saveCategory.mockImplementationOnce(() => ({
                id: i,
                name: category.name,
            }));
            const createdCategory = yield (0, categoriesService_1.createCategory)(category);
            expect(createdCategory).toMatchObject({
                id: i,
                name: category.name,
            });
        }
    }));
    it("should throw error when already have a category with the same name", () => __awaiter(void 0, void 0, void 0, function* () {
        const category = {
            name: "category",
        };
        categoriesRepository_1.getCategoryByName.mockImplementationOnce(() => category);
        yield expect((0, categoriesService_1.createCategory)(category)).rejects.toThrow("There is already a category with this name");
    }));
});
