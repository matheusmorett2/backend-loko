import { getMockReq, getMockRes } from "@jest-mock/express";
import charactersController, {
  getById,
  getCharacters,
} from "./charactersController";
import { getCharacterById } from "./charactersService";

jest.mock("express", () => ({
  Router: () => ({
    get: jest.fn(),
  }),
}));

jest.mock("./charactersService");

describe("characters controller", () => {
  it("should call router with the correct params", () => {
    expect(charactersController.get).toBeCalledWith("/:id", getById);
    expect(charactersController.get).toBeCalledWith("/", getCharacters);
  });

  it("should call getCharacterById", () => {
    const { next, res } = getMockRes();

    getById(
      getMockReq({
        params: {
          id: "1",
        },
      }),
      res,
      next
    );

    expect(getCharacterById).toBeCalledWith("1");
  });
});
