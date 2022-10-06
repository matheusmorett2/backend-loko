import { Response, Request, Router, NextFunction } from "express";
import { SearchParams } from "./charactersRepository";
import { getCharacterById, getCharacterByParams } from "./charactersService";

const router = Router();

// get by id /characters/:id
// get /characters?name=name /characters?appearance=1

export const getById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  if (!id) {
    res.status(400).send("You should pass an valid Id");
  }

  try {
    const character = getCharacterById(id);
    res.status(200).send(character);
  } catch (err) {
    next(err);
  }
};
router.get("/:id", getById);

type SomeHandlerRequest = Request<{}, {}, {}, SearchParams>;

export const getCharacters = async (
  req: SomeHandlerRequest,
  res: Response,
  next: NextFunction
) => {
  const { name, appearance } = req.query;

  try {
    const character = getCharacterByParams({
      name,
      appearance,
    });
    res.status(200).send(character);
  } catch (err) {
    next(err);
  }
};
router.get("/", getCharacters);

export default router;
