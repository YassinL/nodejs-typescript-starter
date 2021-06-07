require("dotenv").config();
import jwt from "jsonwebtoken";
import { entitiesObject } from "../../../../app/database/typeorm/entities";
import { UserRepo } from "../../userRepo";
import { JwtService } from "../../../../libs/jwtService";
import { LoginUser } from "./loginUser";
import { LoginUserController } from "./loginUserController";

const userRepo = new UserRepo(entitiesObject);
const jwtService = new JwtService(jwt, process.env.JWT_SECRET);
const loginUser = new LoginUser(userRepo, jwtService);
const loginUserController = new LoginUserController(loginUser);

export { loginUser, loginUserController };
