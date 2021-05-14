import { SkillRepo } from "../../skillRepo";

export class CreateSkill {
  private skillRepo: SkillRepo;

  constructor(skillRepo: SkillRepo) {
    this.skillRepo = skillRepo;
  }

  public async createSkill(categoryId: any, skillProps: any) {
    const createSkill = await this.skillRepo.createSkill(
      categoryId,
      skillProps
    );
    console.log("CREATE SKILL SERVICE", createSkill);
    return createSkill;
  }
}
