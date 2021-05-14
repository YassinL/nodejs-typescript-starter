import { EditCategory } from "./editCategory";
import { Request, Response } from "express";
//Controller

export class EditCategoryController {
  private useCase: EditCategory;

  constructor(editCategory: EditCategory) {
    this.useCase = editCategory;
  }

  public async execute(request: Request, response: Response) {
    const updateCategory = await this.useCase.editCategory(
      request.body,
      request.params
    );
    response.status(200).json(updateCategory);
  }
}
