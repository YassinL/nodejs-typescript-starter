import { entitiesObject } from "../../../../app/database/typeorm/entities";
import { SkillRepo } from "../../skillRepo";
import { GetSKillById } from "./getSkillById";
import { GetSKillByIdController } from "./getSkillByIdController";

const skillRepo = new SkillRepo(entitiesObject);
const getSkillById = new GetSKillById(skillRepo);
const getSkillByIdController = new GetSKillByIdController(getSkillById);

export { getSkillById, getSkillByIdController };
