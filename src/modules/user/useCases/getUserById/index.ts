import { entitiesObject } from "../../../../app/database/typeorm/entities";
import { UserRepo } from "../../userRepo";
import { GetUserById } from "./getUserById";
import { GetUserByIdController } from "./getUserByIdController";

const userRepo = new UserRepo(entitiesObject);
const getUserById = new GetUserById(userRepo);
const getUserByIdController = new GetUserByIdController(getUserById);

export { getUserById, getUserByIdController };
