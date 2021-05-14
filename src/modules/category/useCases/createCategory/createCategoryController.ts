import { CreateCategory } from "./createCategory";
import { Request, Response } from "express";
//Controller

export class CreateCategoryController {
  private useCase: CreateCategory;

  constructor(createCategory: CreateCategory) {
    this.useCase = createCategory;
  }

  public async execute(request: Request, response: Response) {
    const { name, description } = request.body;

    //Si le body est pas valide, on renvoie une 400
    if (!name) {
      return response.status(400).json({
        error: {
          message: "Name is required",
        },
      });
    }

    if (!description) {
      return response.status(400).json({
        error: {
          message: "Description is required",
        },
      });
    }

    const categories = await this.useCase.createCategories({
      name,
      description,
    });
    console.log("Controller categories result", categories);

    response.status(200).json(categories);
  }
}
