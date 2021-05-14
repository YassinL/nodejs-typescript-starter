import { CreateSkill } from "./createSkill";
import { Request, Response } from "express";

export class CreateSkillController {
  private useCase: CreateSkill;

  constructor(createSkill: CreateSkill) {
    this.useCase = createSkill;
  }

  public async execute(request: Request, response: Response) {
    const createSKill = await this.useCase.createSkill(
      request.params.categoryId,
      request.body
    );
    response.status(200).json(createSKill);
  }
}
