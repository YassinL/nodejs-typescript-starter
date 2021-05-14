import { GetUserById } from "./getUserById";
import { Request, Response } from "express";

export class GetUserByIdController {
  private useCase: GetUserById;

  constructor(userRepo: GetUserById) {
    this.useCase = userRepo;
  }

  public async execute(request: Request, response: Response) {
    const id = request.params.id;
    const getUserById = await this.useCase.getUserById(id);
    response.status(200).json(getUserById);
  }
}
