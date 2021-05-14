import { entitiesObject } from "../../../../app/database/typeorm/entities";
import { UserRepo } from "../../userRepo";
import { EditUser } from "./editUser";
import { EditUserController } from "./editUserController";

const userRepo = new UserRepo(entitiesObject);
const editUser = new EditUser(userRepo);
const editUserController = new EditUserController(editUser);

export { editUser, editUserController };
