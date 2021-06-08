require("dotenv").config();
import { Router, Request, Response } from "express";
import { categoryRouter } from "../../modules/category/categoryRouter";
import { userRouter } from "../../modules/user/userRouter";
import { progresseRouter } from "../../modules/progresse/progresseRouter";
import { skillRouter } from "../../modules/skill/skillRouter";
import { studentRouter } from "../../modules/student/studentRouter";
import { levelRouter } from "../../modules/level/levelRouter";

const v1Router: Router = Router();

v1Router.get("/", (_: Request, response: Response) => {
  response.status(200).json({ message: "Hello world !" });
});

v1Router.use("/categories", categoryRouter);
v1Router.use("/users", userRouter);
v1Router.use("/skills", skillRouter);
v1Router.use("/students", studentRouter);
v1Router.use("/levels", levelRouter);
v1Router.use("/progresses", progresseRouter);

export { v1Router };
