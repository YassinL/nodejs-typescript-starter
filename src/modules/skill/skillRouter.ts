import { Router } from "express";

const skillRouter: Router = Router();

skillRouter.get("/", (req, res) => {
  res.json("Skills");
});

export { skillRouter };
