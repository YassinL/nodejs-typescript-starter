import { entitiesObject } from "../../../../app/database/typeorm/entities";
import { ProgresseRepo } from "../../progresseRepo";
import { GetProgresse } from "./getProgresse";
import { GetProgresseController } from "./getProgresseController";

const progresseRepo = new ProgresseRepo(entitiesObject);
const getProgresse = new GetProgresse(progresseRepo);
const getProgresseController = new GetProgresseController(getProgresse);

export { getProgresse, getProgresseController };
