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
const categoriesRepository_1 = require("./categoriesRepository");
const singleton_1 = require("../../singleton");
describe("categories repository", () => {
    it("should create category", () => __awaiter(void 0, void 0, void 0, function* () {
        const category = {
            name: "category",
        };
        singleton_1.prismaMock.category.create.mockResolvedValue(category);
        const newCategory = yield (0, categoriesRepository_1.saveCategory)(category);
        expect(newCategory.name).toEqual(category.name);
    }));
    it("should get category by name", () => __awaiter(void 0, void 0, void 0, function* () {
        const category = {
            name: "category",
        };
        singleton_1.prismaMock.category.findFirst.mockResolvedValue(category);
        const foundCategory = yield (0, categoriesRepository_1.getCategoryByName)(category.name);
        expect(foundCategory === null || foundCategory === void 0 ? void 0 : foundCategory.name).toEqual(category.name);
    }));
    it("should return null when get non existent category", () => __awaiter(void 0, void 0, void 0, function* () {
        const category = {
            name: "categoryNotFound",
        };
        singleton_1.prismaMock.category.findFirst.mockResolvedValue(null);
        const foundCategory = yield (0, categoriesRepository_1.getCategoryByName)(category.name);
        expect(foundCategory).toBe(null);
    }));
});
