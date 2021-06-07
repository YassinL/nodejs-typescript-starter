import { Router } from "express";

import { createUserController } from "./useCases/createUser";
import { deleteUserController } from "./useCases/deleteUser";
import { editUserController } from "./useCases/editUser";
import { getUserController } from "./useCases/getUser";
import { getUserByIdController } from "./useCases/getUserByid";
import { loginUserController } from "./useCases/loginUser";

const userRouter: Router = Router();

///api/v1/users/

userRouter.post("/", (request, response) => {
  createUserController.execute(request, response);
});

userRouter.post("/login", (request, response) => {
  console.log("login");
  loginUserController.execute(request, response);
});

userRouter.get("/", (request, response) => {
  getUserController.execute(request, response);
});

userRouter.get("/:id", (request, response) => {
  getUserByIdController.execute(request, response);
});

userRouter.patch("/:id", (request, response) => {
  editUserController.execute(request, response);
});

userRouter.delete("/:id", (request, response) => {
  deleteUserController.execute(request, response);
});

export { userRouter };
