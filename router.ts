import { Router } from "express";
import Categories from "./src/categories/categoriesController";

const router = Router();
router.use('/categories', Categories);

export default router;
