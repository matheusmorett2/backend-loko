"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
const errorMiddleware = (error, _, res) => {
    console.log("middlewareee");
    const status = error.status || 500;
    const message = error.message || "Something went wrong";
    res.status(status).send({
        status,
        message,
    });
};
exports.errorMiddleware = errorMiddleware;
