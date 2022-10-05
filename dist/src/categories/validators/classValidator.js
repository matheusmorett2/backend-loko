"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
let post = new Post();
post.title = "Hello"; // should not pass
post.text = "this is a great post about hell world"; // should not pass
post.rating = 11; // should not pass
post.email = "google.com"; // should not pass
post.site = "googlecom"; // should not pass
(0, class_validator_1.validate)(post).then((errors) => {
    // errors is an array of validation errors
    if (errors.length > 0) {
        console.log("validation failed. errors: ", errors);
    }
    else {
        console.log("validation succeed");
    }
});
(0, class_validator_1.validateOrReject)(post).catch((errors) => {
    console.log("Promise rejected (validation failed). Errors: ", errors);
});
// or
function validateOrRejectExample(input) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, class_validator_1.validateOrReject)(input);
        }
        catch (errors) {
            console.log("Caught promise rejection (validation failed). Errors: ", errors);
        }
    });
}
