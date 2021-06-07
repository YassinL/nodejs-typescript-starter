import { LoginUser } from "./loginUser";
import { Request, Response } from "express";

export class LoginUserController {
  private usecase: LoginUser;

  constructor(loginUser: LoginUser) {
    this.usecase = loginUser;
  }

  public async execute(request: Request, response: Response) {
    const dataUser = request.body;
    await this.usecase.loginUser(response, dataUser);
    response.status(201).json({ message: "Connecté" });
  }
}
