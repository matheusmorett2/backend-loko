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
exports.getCategoryByName = exports.saveCategory = void 0;
const prisma_client_1 = __importDefault(require("./../../prisma.client"));
const saveCategory = (category) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_client_1.default.category.create({
        data: category,
    });
});
exports.saveCategory = saveCategory;
const getCategoryByName = (name) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_client_1.default.category.findFirst({
        where: {
            name,
        },
    });
});
exports.getCategoryByName = getCategoryByName;
