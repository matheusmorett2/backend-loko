import HttpException from "../exceptions/httpException";
import { Character } from "./charactersModel";
import { getById, getByParams, SearchParams } from "./charactersRepository";

export const getCharacterById = (id: string): Character => {
  const character = getById(Number(id));

  if (!character) {
    throw new HttpException({
      message: "The isn't a character with this ID",
      status: 404,
    });
  }

  return character;
};

export const getCharacterByParams = (params: SearchParams): Character[] => {
  const characters = getByParams(params);

  return characters;
};
