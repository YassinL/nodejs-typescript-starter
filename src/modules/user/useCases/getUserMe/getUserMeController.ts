import { GetUserMe } from "./getUserMe";
import { Request, Response } from "express";

export class GetUserMeController {
  private useCase: GetUserMe;

  constructor(userRepo: GetUserMe) {
    this.useCase = userRepo;
  }

  public async execute(request: Request, response: Response) {
    console.log("Here COntroller");
    const userId = request.user.id;
    console.log("request me", userId);
    const getUserId = await this.useCase.getUserMe(userId);
    response.status(200).json(getUserId);
  }
}
