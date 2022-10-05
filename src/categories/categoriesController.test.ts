import { body } from "express-validator";
import { validateBody } from "../validators";
import categoriesController, { postCategory } from "./categoriesController";
import { createCategory } from "./categoriesService";
import { getMockReq, getMockRes } from "@jest-mock/express";

jest.mock("express", () => ({
  Router: () => ({
    post: jest.fn(),
  }),
}));
jest.mock("../validators");
jest.mock("./categoriesService");

describe("categories controller", () => {
  it("should call router with the correct params", () => {
    expect(categoriesController.post).toBeCalledWith(
      "/",
      validateBody([body("name").isString().withMessage(`name is required.`)]),
      postCategory
    );
  });

  it("should call postCategory with the correct params", () => {
    const { next, res } = getMockRes();

    postCategory(
      getMockReq({
        body: {
          name: "category",
        },
      }),
      res,
      next
    );

    expect(createCategory).toBeCalledWith({
      name: "category",
    });
  });

  it("should call next with error if service throw", () => {
    const { next, res } = getMockRes();

    const error = new Error("Test");
    (createCategory as jest.Mock).mockImplementationOnce(() => {
      throw error;
    });

    postCategory(
      getMockReq({
        body: {
          name: "category",
        },
      }),
      res,
      next
    );

    expect(next).toBeCalledWith(error);
  });
});
