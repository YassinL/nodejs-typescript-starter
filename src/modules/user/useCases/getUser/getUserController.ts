import { GetUser } from "./getUser";
import { Request, Response } from "express";

export class GetUserController {
  private useCase: GetUser;

  constructor(getUser: GetUser) {
    this.useCase = getUser;
  }

  public async execute(_: Request, response: Response) {
    const user = await this.useCase.getUser();
    response.status(200).json(user);
  }
}
