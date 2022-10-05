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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCategory = void 0;
const httpException_1 = __importDefault(require("../exceptions/httpException"));
const categoriesRepository_1 = require("./categoriesRepository");
const createCategory = (category) => __awaiter(void 0, void 0, void 0, function* () {
    const existingCategory = yield (0, categoriesRepository_1.getCategoryByName)(category.name);
    if (existingCategory) {
        throw new httpException_1.default({
            message: "There is already a category with this name",
            status: 409,
        });
    }
    const newCategory = (0, categoriesRepository_1.saveCategory)(category);
    return newCategory;
});
exports.createCategory = createCategory;
