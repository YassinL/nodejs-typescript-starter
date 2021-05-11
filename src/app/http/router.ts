import { Router, Request, Response } from "express";

const v1Router: Router = Router();

v1Router.get("/", (_: Request, response: Response) => {
  response.status(200).json("hello world ");
});

export { v1Router };
