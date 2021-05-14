import { SkillRepo } from "../../skillRepo";

export class GetSKillById {
  private skillRepo: SkillRepo;

  constructor(skillRepo: SkillRepo) {
    this.skillRepo = skillRepo;
  }

  public async getSkillById(id: any) {
    const getSkillById = await this.skillRepo.getSkillById(id);
    return getSkillById;
  }
}
