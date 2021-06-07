import { DeleteStudent } from "./deleteStudent";
import { Request, Response } from "express";

//Controller

export class DeleteStudentController {
  private useCase: DeleteStudent;

  constructor(deleteStudent: DeleteStudent) {
    this.useCase = deleteStudent;
  }

  public async execute(request: Request, response: Response) {
    const { id } = request.params;
    const deleteStudent = await this.useCase.deleteStudent(id);
    response.status(200).json(deleteStudent);
  }
}
