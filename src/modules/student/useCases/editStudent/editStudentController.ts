import { EditStudent } from "./editStudent";
import { Request, Response } from "express";

export class EditStudentController {
  private useCase: EditStudent;

  constructor(editStudent: EditStudent) {
    this.useCase = editStudent;
  }

  public async execute(request: Request, response: Response) {
    const editStudent = await this.useCase.editStudent(
      request.body,
      request.params
    );
    response.status(200).json(editStudent);
  }
}
