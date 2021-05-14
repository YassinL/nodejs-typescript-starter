import { GetSKillById } from "./getSkillById";
import { Request, Response } from "express";

export class GetSKillByIdController {
  private useCase: GetSKillById;

  constructor(getSkill: GetSKillById) {
    this.useCase = getSkill;
  }

  public async execute(request: Request, response: Response) {
    const getSkillById = await this.useCase.getSkillById(request.params.id);
    response.status(200).json(getSkillById);
  }
}
