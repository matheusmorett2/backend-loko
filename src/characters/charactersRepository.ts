import { Character } from "./charactersModel";
import characters from "./../../characters.json";

export const getById = (id: number): Character | undefined => {
  return characters.find((char: Character) => char.char_id === id);
};

export type SearchParams = {
  name?: string;
  appearance?: number;
};

export const getByParams = (params: SearchParams): Character[] => {
  return characters.filter((char: Character) => {
    if (!params.name && !params.appearance) {
      // Don't filter, get all
      return true;
    }

    // Filter by name and appearence
    if (params.name && params.appearance) {
      return (
        char.name.toLowerCase().includes(params.name.toLowerCase()) &&
        char.appearance.some((appearance) => appearance == params.appearance)
      );
    }

    // Filter by name
    if (params.name) {
      return char.name.toLowerCase().includes(params.name.toLowerCase());
    }

    // Filter by appearnce
    if (params.appearance) {
      return char.appearance.some(
        (appearance) => appearance == params.appearance
      );
    }
  });
};
