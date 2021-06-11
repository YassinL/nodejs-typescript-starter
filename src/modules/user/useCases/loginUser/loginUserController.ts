import { LoginUser } from "./loginUser";
import { Request, Response } from "express";

export class LoginUserController {
  private usecase: LoginUser;

  constructor(loginUser: LoginUser) {
    this.usecase = loginUser;
  }

  public async execute(request: Request, response: Response) {
    try {
      const result = await this.usecase.loginUser(request.body);
      console.log("RESULT success", result);
      if (result.success) {
        response.cookie("token", result.createToken, {
          maxAge: 3600000,
          secure: false,
          httpOnly: true,
        });
        response.status(201).json({ message: "Connecté" });
      } else {
        response.status(400).json(result.message);
      }
    } catch (err) {
      console.log("create controllers errors :", err);
    }
  }
}
