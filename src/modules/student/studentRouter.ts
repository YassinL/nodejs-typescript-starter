import { Router } from "express";

import { createStudentController } from "./useCases/createStudent";
import { editStudentController } from "./useCases/editStudent";
import { getStudentController } from "./useCases/getStudent";
import { getStudentByIdController } from "./useCases/getStudentById";
import { deleteStudentController } from "./useCases/deleteStudent";

const studentRouter: Router = Router();

///api/v1/students/

studentRouter.post("/:userId", (request, response) => {
  createStudentController.execute(request, response);
});

studentRouter.get("/", (request, response) => {
  getStudentController.execute(request, response);
});

studentRouter.get("/:id", (request, response) => {
  getStudentByIdController.execute(request, response);
});

studentRouter.patch("/:id", (request, response) => {
  editStudentController.execute(request, response);
});

studentRouter.delete("/:id", (request, response) => {
  deleteStudentController.execute(request, response);
});

export { studentRouter };
