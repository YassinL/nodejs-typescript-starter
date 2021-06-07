import { Router, Request, Response } from "express";
import { progresseRouter } from "../../modules/progresse/progresseRouter";
import { categoryRouter } from "../../modules/category/categoryRouter";
import { skillRouter } from "../../modules/skill/skillRouter";
import { userRouter } from "../../modules/user/userRouter";

const v1Router: Router = Router();

v1Router.get("/", (_: Request, response: Response) => {
  response.status(200).json({ message: "Hello world !" });
});

v1Router.use("/categories", categoryRouter);
v1Router.use("/skills", skillRouter);
v1Router.use("/users", userRouter);
v1Router.use("/progresses", progresseRouter);

export { v1Router };
