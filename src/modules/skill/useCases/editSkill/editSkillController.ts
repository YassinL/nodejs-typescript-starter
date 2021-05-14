import { EditSkill } from "./editSkill";
import { Request, Response } from "express";

export class EditSkillController {
  private useCase: EditSkill;

  constructor(editSkill: EditSkill) {
    this.useCase = editSkill;
  }

  public async execute(request: Request, response: Response) {
    const editUser = await this.useCase.editSkill(request.body, request.params);
    response.status(200).json(editUser);
  }
}
