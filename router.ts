import { Router } from "express";
import Categories from "./src/categories/categoriesController";
import Characters from "./src/characters/charactersController";

const router = Router();
router.use('/categories', Categories);
router.use('/characters', Characters);

export default router;
