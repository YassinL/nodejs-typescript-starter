import { SkillRepo } from "../../skillRepo";

export class DeleteSkill {
  private skillRepo: SkillRepo;

  constructor(skillRepo: SkillRepo) {
    this.skillRepo = skillRepo;
  }

  public async deleteSkill(params: any) {
    const skillId = { id: params.id };
    const deleteSKill = await this.skillRepo.deleteSkill(skillId);
    const messageSkill = {
      deleteSKill,
      message: "Le Skill a bien été supprimé !",
    };
    return messageSkill;
  }
}
