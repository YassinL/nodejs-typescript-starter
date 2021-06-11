require("dotenv").config();
import jwt from "jsonwebtoken";
import { AuthMiddleWare } from "./auth";
import { JwtService } from "../libs/jwtService";

const jwtService = new JwtService(jwt, process.env.JWT_SECRET);
const auth = new AuthMiddleWare(jwtService);

export { auth };
