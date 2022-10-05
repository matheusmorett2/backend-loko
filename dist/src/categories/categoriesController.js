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
exports.postCategory = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const categoriesService_1 = require("./categoriesService");
const validatorBody_1 = require("../validators/validatorBody");
const router = (0, express_1.Router)();
const postCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, categoriesService_1.createCategory)(req.body);
        res.status(201).send(result);
    }
    catch (err) {
        next(err);
    }
});
exports.postCategory = postCategory;
router.post("/", (0, validatorBody_1.validateBody)([(0, express_validator_1.body)("name").isString().withMessage(`name is required.`)]), exports.postCategory);
exports.default = router;
