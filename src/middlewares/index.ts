import jwt from "jsonwebtoken";
import { AuthMiddleWare } from "./auth";
import { JwtService } from "../libs/jwtService";

const jwtService = new JwtService(jwt, process.env.JWT_SERVOCE);
const auth = new AuthMiddleWare(jwt);

export { auth };
