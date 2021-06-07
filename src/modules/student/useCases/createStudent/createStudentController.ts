import { CreateStudent } from "./createStudent";
import { Request, Response } from "express";

export class CreateStudentController {
  private useCase: CreateStudent;

  constructor(createStudent: CreateStudent) {
    this.useCase = createStudent;
  }

  public async execute(request: Request, response: Response) {
    const student = await this.useCase.createStudent(
      request.params.userId,
      request.body
    );
    response.status(200).json(student);
  }
}
