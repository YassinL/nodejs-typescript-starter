import { GetCategoryById } from "./getCategoryById";
import { Request, Response } from "express";
//Controller

export class GetCategoryByIdController {
  private useCase: GetCategoryById;

  constructor(getCategoryById: GetCategoryById) {
    this.useCase = getCategoryById;
  }

  public async execute(request: Request, response: Response) {
    const id = request.params.id;
    const categories = await this.useCase.getCategoryById(id);
    console.log("Controller categories result", categories);
    response.status(200).json(categories);
  }
}
