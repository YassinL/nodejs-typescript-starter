import { DeleteCategory } from "./deleteCategory";
import { Request, Response } from "express";

//Controller

export class DeleteCategoryController {
  private useCase: DeleteCategory;

  constructor(deleteCategory: DeleteCategory) {
    this.useCase = deleteCategory;
  }

  public async execute(request: Request, response: Response) {
    const { id } = request.params;
    const deleteCategory = await this.useCase.deleteCategory(id);
    console.log("Deleter Category COntroller", deleteCategory);
    response.status(200).json(deleteCategory);
  }
}
