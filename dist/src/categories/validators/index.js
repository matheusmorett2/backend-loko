"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const class_validator_1 = require("class-validator");
class Post {
}
__decorate([
    (0, class_validator_1.Length)(10, 20)
], Post.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.Contains)("hello")
], Post.prototype, "text", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(10)
], Post.prototype, "rating", void 0);
__decorate([
    (0, class_validator_1.IsEmail)()
], Post.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsFQDN)()
], Post.prototype, "site", void 0);
__decorate([
    (0, class_validator_1.IsDate)()
], Post.prototype, "createDate", void 0);
exports.Post = Post;
