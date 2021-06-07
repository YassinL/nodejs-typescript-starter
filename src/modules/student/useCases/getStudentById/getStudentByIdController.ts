import { GetStudentById } from "./getStudentById";
import { Request, Response } from "express";

export class GetStudentByIdController {
  private useCase: GetStudentById;

  constructor(studentRepo: GetStudentById) {
    this.useCase = studentRepo;
  }

  public async execute(request: Request, response: Response) {
    const id = request.params.id;
    const getStudentById = await this.useCase.getStudentById(id);
    response.status(200).json(getStudentById);
  }
}
