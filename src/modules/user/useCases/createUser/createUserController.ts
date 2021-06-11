import { CreateUser } from "./createUser";
import { Request, Response } from "express";
import { validate } from "class-validator";

//DTO
import { RequestCreateUserDto } from "./createUserDto";

export class CreateUserController {
  private useCase: CreateUser;

  constructor(createUser: CreateUser) {
    this.useCase = createUser;
  }

  public async execute(request: Request, response: Response) {
    const requestUserDto = new RequestCreateUserDto(request.body);
    const errors = await validate(requestUserDto);

    console.log("Request DTO create user errors : ", errors);

    const dtoErrors = await requestUserDto.isValid(requestUserDto);

    if (!!dtoErrors) {
      return response.status(400).json(dtoErrors);
    }

    try {
      const result = await this.useCase.createUser(request.body);

      if (!result.success) {
        return response.status(400).json(result.message);
      }

      console.log("result", result);

      return response.status(201).json();
    } catch (err) {
      console.log("create controllers errors :", err);
    }
  }
}
