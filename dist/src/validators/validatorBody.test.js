"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("@jest-mock/express");
const express_validator_1 = require("express-validator");
const validatorBody_1 = require("./validatorBody");
jest.mock("express-validator");
const validationChain = [
    (0, express_validator_1.body)("name").isString().withMessage(`name is required.`),
];
describe("validator body", () => {
    it("should call next when errors are empty", () => {
        const { res, next };
    }) = (0, express_1.getMockRes)();
    // getMockReq({
    //     body: {
    //       name: "category",
    //     },
    //   }),
    //   res,
    //   next
    (0, validatorBody_1.validateBody)(validationChain);
});
;
