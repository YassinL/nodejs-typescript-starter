import { SkillRepo } from "../../skillRepo";

export class EditSkill {
  private skillRepo: SkillRepo;

  constructor(skillRepo: SkillRepo) {
    this.skillRepo = skillRepo;
  }

  public async editSkill(skillProps: any, params: any) {
    const editSkill = await this.skillRepo.editSkill(skillProps, params.id);
    return editSkill;
  }
}
