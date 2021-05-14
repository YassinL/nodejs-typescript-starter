import { Router } from "express";
import { deleteCategoryController } from "../category/useCases/deleteCategory";
import { createUserController } from "./useCases/createUser";
import { editUserController } from "./useCases/editUser";
import { getUserController } from "./useCases/getUser";
import { getUserByIdController } from "./useCases/getUserById";

const userRouter: Router = Router();

///api/v1/user/

userRouter.post("/", (request, response) => {
  createUserController.execute(request, response);
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
  deleteCategoryController.execute(request, response);
});

export { userRouter };
