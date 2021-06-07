import { GetProgresse } from "./getProgresse";
import { Request, Response } from "express";

export class GetProgresseController {
  private useCase: GetProgresse;

  constructor(getProgresse: GetProgresse) {
    this.useCase = getProgresse;
  }

  public async execute(_: Request, response: Response) {
    const getProgresse = await this.useCase.getProgresse();
    response.status(200).json(getProgresse);
  }
}
