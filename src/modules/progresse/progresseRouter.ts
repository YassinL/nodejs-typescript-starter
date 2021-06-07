import { Router } from "express";
import { createProgresseController } from "./useCases/createProgresse";
import { getProgresseController } from "./useCases/getProgresse";

const progresseRouter: Router = Router();

progresseRouter.post("/", (request, response) => {
  createProgresseController.execute(request, response);
});

progresseRouter.get("/", (request, response) => {
  getProgresseController.execute(request, response);
});

export { progresseRouter };
