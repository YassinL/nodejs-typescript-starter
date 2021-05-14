import { GetSKill } from "./getSkill";
import { Request, Response } from "express";

export class GetSKillController {
  private useCase: GetSKill;

  constructor(getSkill: GetSKill) {
    this.useCase = getSkill;
  }

  public async execute(_: Request, response: Response) {
    const getSkill = await this.useCase.getSkill();
    response.status(200).json(getSkill);
  }
}
