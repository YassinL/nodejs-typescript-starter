import { CreateUser } from "./createUser";
import { Request, Response } from "express";

export class CreateUserController {
  private useCase: CreateUser;

  constructor(createUser: CreateUser) {
    this.useCase = createUser;
  }

  public async execute(request: Request, response: Response) {
    const userProps = request.body;
    const user = await this.useCase.createUser(userProps);
    response.status(200).json(user);
  }
}
