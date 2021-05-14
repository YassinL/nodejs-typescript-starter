import { SkillRepo } from "../../skillRepo";

export class GetSKill {
  private skillRepo: SkillRepo;

  constructor(skillRepo: SkillRepo) {
    this.skillRepo = skillRepo;
  }

  public async getSkill() {
    const getSkill = await this.skillRepo.getSkills();
    return getSkill;
  }
}
