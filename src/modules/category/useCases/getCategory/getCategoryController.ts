import { GetCategory } from "./getCategory";
import { Request, Response } from "express";
//Controller

export class GetCategoryController {
  private useCase: GetCategory;

  constructor(getCategory: GetCategory) {
    this.useCase = getCategory;
  }

  public async execute(_: Request, res: Response) {
    const categories = await this.useCase.getCategories();
    res.status(200).json(categories);
  }
}
