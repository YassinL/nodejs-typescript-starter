import { Router } from "express";
import { createSkillController } from "./useCases/createSkill";
import { deleteSkillController } from "./useCases/deleteSkill";
import { editSkillController } from "./useCases/editSkill";
import { getSkillController } from "./useCases/getSkill";
import { getSkillByIdController } from "./useCases/getSkillById";

const skillRouter: Router = Router();

skillRouter.post("/:categoryId", (request, response) => {
  createSkillController.execute(request, response);
});

skillRouter.get("/", (request, response) => {
  getSkillController.execute(request, response);
});

skillRouter.get("/:id", (request, response) => {
  getSkillByIdController.execute(request, response);
});

skillRouter.patch("/:id", (request, response) => {
  editSkillController.execute(request, response);
});

skillRouter.delete("/:id", (request, response) => {
  deleteSkillController.execute(request, response);
});

export { skillRouter };
