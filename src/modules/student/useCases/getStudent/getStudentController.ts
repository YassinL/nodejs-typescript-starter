import { GetStudent } from "./getStudent";
import { Request, Response } from "express";

export class GetStudentController {
  private useCase: GetStudent;

  constructor(getStudent: GetStudent) {
    this.useCase = getStudent;
  }

  public async execute(_: Request, response: Response) {
    const student = await this.useCase.getStudent();
    response.status(200).json(student);
  }
}
