"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const validators_1 = require("../validators");
const categoriesController_1 = __importStar(require("./categoriesController"));
const categoriesService_1 = require("./categoriesService");
const express_1 = require("@jest-mock/express");
jest.mock("express", () => ({
    Router: () => ({
        post: jest.fn(),
    }),
}));
jest.mock("../validators");
jest.mock("./categoriesService");
describe("categories controller", () => {
    it("should call router with the correct params", () => {
        expect(categoriesController_1.default.post).toBeCalledWith("/", (0, validators_1.validateBody)([(0, express_validator_1.body)("name").isString().withMessage(`name is required.`)]), categoriesController_1.postCategory);
    });
    it("should call postCategory with the correct params", () => {
        const { next, res } = (0, express_1.getMockRes)();
        (0, categoriesController_1.postCategory)((0, express_1.getMockReq)({
            body: {
                name: "category",
            },
        }), res, next);
        expect(categoriesService_1.createCategory).toBeCalledWith({
            name: "category",
        });
    });
    it("should call next with error if service throw", () => {
        const { next, res } = (0, express_1.getMockRes)();
        const error = new Error("Test");
        categoriesService_1.createCategory.mockImplementationOnce(() => {
            throw error;
        });
        (0, categoriesController_1.postCategory)((0, express_1.getMockReq)({
            body: {
                name: "category",
            },
        }), res, next);
        expect(next).toBeCalledWith(error);
    });
});
