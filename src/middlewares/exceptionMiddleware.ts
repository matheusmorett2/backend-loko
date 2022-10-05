import { NextFunction, Request, Response } from "express";
import HttpException from "../exceptions/httpException";

export const exceptionMiddleware = (
  err: HttpException,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  res.status(err.status).send(err.message);
};
