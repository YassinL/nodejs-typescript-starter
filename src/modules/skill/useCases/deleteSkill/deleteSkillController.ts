import { DeleteSkill } from "./deleteSkill";
import { Request, Response } from "express";

//Controller

export class DeleteSkillController {
  private useCase: DeleteSkill;

  constructor(deleteSkill: DeleteSkill) {
    this.useCase = deleteSkill;
  }

  public async execute(request: Request, response: Response) {
    const { id } = request.params;
    const deleteSkill = await this.useCase.deleteSkill(id);
    response.status(200).json(deleteSkill);
  }
}
