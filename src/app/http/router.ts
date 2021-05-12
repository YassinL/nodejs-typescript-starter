import { Router, Request, Response } from "express";

const v1Router: Router = Router();

v1Router.get("/", (_: Request, response: Response) => {
  response.status(200).json({ message: "Hello world !" });
});

v1Router.get("/login", (_: Request, response: Response) => {
  response.status(200).json({ message: "LOGIN PAGE !" });
});

export { v1Router };
