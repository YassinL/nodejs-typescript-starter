import { Request, Response, NextFunction } from "express";

export class AuthMiddleWare {
  private jwt: any;

  constructor(JwtService: any) {
    this.jwt = JwtService;
  }

  public async isAuthentificated(
    request: Request,
    _: Response,
    next: NextFunction
  ) {
    console.log("Request", request.headers.cookie);
    try {
      //   const token = request.cookies["auth-cookie"];
      const token = request.headers.cookie || "";
      console.log("TOKEN", token);
      if (!token) {
        console.log("Votre session a expiré ! ");
      }

      const decrypt = await this.jwt.verifyToken(
        token,
        process.env.JWT_SIGN_SECRET
      );

      request.currentUser = decrypt.id;
      next();
    } catch (err) {
      next(err);
    }
  }
}
