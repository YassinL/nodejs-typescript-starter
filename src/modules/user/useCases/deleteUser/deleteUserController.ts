import { DeleteUser } from "./deleteUser";
import { Request, Response } from "express";

//Controller

export class DeleteUserController {
  private useCase: DeleteUser;

  constructor(deleteUser: DeleteUser) {
    this.useCase = deleteUser;
  }

  public async execute(request: Request, response: Response) {
    const { id } = request.params;
    const deleteUser = await this.useCase.deleteUser(id);
    response.status(200).json(deleteUser);
  }
}
