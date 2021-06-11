import { Request, Response, NextFunction } from "express";
import { JwtService } from "../libs/jwtService";

export class AuthMiddleWare {
  private jwtService: JwtService;

  constructor(jwtService: any) {
    this.jwtService = jwtService;
  }

  public async isAuthentificated(
    request: Request,
    _: Response,
    next: NextFunction
  ) {
    console.log("Request", request.cookies);
    try {
      const token = request.cookies.token || "";
      console.log("TOKEN", token);
      if (!token) {
        console.log("Votre session a expiré ! ");
      }

      const decrypt = await this.jwtService.verifyToken(token);
      console.log("Decrypt", decrypt);

      request.user = { id: decrypt.id, email: decrypt.id };
      console.log("Request User", request.user);
      next();
    } catch (err) {
      next(err);
    }
  }
}
