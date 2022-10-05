import { Response, Request, Router, NextFunction } from "express";
import { body } from "express-validator";
import { createCategory } from "./categoriesService";
import { validateBody } from "../validators/validatorBody";

const router = Router();

export const postCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await createCategory(req.body);
    res.status(201).send(result);
  } catch (err) {
    next(err);
  }
};

router.post(
  "/",
  validateBody([body("name").isString().withMessage(`name is required.`)]),
  postCategory
);

export default router;
