import { entitiesObject } from "../../../../app/database/typeorm/entities";
import { UserRepo } from "../../userRepo";
import { DeleteUserController } from "./deleteUserController";
import { DeleteUser } from "./deleteUser";

const userRepo = new UserRepo(entitiesObject);
const deleteUser = new DeleteUser(userRepo);
const deleteUserController = new DeleteUserController(deleteUser);

export { deleteUser, deleteUserController };
