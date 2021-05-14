import { entitiesObject } from "../../../../app/database/typeorm/entities";
import { SkillRepo } from "../../skillRepo";
import { GetSKill } from "./getSkill";
import { GetSKillController } from "./getSkillController";

const skillRepo = new SkillRepo(entitiesObject);
const getSkill = new GetSKill(skillRepo);
const getSkillController = new GetSKillController(getSkill);

export { getSkill, getSkillController };
