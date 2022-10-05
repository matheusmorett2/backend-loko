"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exceptionMiddleware = void 0;
const exceptionMiddleware = (err, _req, res, _next) => {
    res.status(err.status).send(err.message);
};
exports.exceptionMiddleware = exceptionMiddleware;
