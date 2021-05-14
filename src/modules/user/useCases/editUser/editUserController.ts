import { EditUser } from "./editUser";
import { Request, Response } from "express";

export class EditUserController {
  private useCase: EditUser;

  constructor(editUser: EditUser) {
    this.useCase = editUser;
  }

  public async execute(request: Request, response: Response) {
    const editUser = await this.useCase.editUser(request.body, request.params);
    response.status(200).json(editUser);
  }
}
