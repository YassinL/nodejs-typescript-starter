import { Router } from "express";
import { auth } from "../../middlewares";
import { createLevelController } from "./useCases/createLevel";

const levelRouter: Router = Router();

levelRouter.post("/", auth.isAuthentificated, (request, response) => {
  createLevelController.execute(request, response);
});

export { levelRouter };
