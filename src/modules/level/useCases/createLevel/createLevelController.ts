import { CreateLevel } from "./createLevel";
import { Request, Response } from "express";
//Controller

export class CreateLevelController {
  private useCase: CreateLevel;

  constructor(createLevel: CreateLevel) {
    this.useCase = createLevel;
  }

  public async execute(request: Request, response: Response) {
    const { number, name } = request.body;
    const levels = await this.useCase.createLevels({
      number,
      name,
    });
    console.log("Controller levels result", levels);

    response.status(200).json(levels);
  }
}
