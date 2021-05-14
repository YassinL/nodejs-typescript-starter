import { entitiesObject } from "../../../../app/database/typeorm/entities";
import { SkillRepo } from "../../skillRepo";
import { EditSkill } from "./editSkill";
import { EditSkillController } from "./editSkillController";

const skillRepo = new SkillRepo(entitiesObject);
const editSkill = new EditSkill(skillRepo);
const editSkillController = new EditSkillController(editSkill);

export { editSkill, editSkillController };
