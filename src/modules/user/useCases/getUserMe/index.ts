import { entitiesObject } from "../../../../app/database/typeorm/entities";
import { UserRepo } from "../../userRepo";
import { GetUserMe } from "./getUserMe";
import { GetUserMeController } from "./getUserMeController";

const userRepo = new UserRepo(entitiesObject);
const getUserMe = new GetUserMe(userRepo);
const getUserMeController = new GetUserMeController(getUserMe);

export { getUserMe, getUserMeController };
