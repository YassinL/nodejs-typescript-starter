import { CreateProgresse } from "./createProgresse";
import { Request, Response } from "express";

export class CreateProgresseController {
  private useCase: CreateProgresse;

  constructor(createProgresse: CreateProgresse) {
    this.useCase = createProgresse;
  }

  public async execute(request: Request, response: Response) {
    // const { userId, skillId } = request.body;
    const createProgresse = await this.useCase.createProgresse(request.body);
    response.status(200).json(createProgresse);
  }
}
