export class SkillRepo {
  private entities: any;

  constructor(entities: any) {
    this.entities = entities;
  }

  public async createSkill(id: any, data: any) {
    const SkillEntity = this.entities.Skill;
    const { name, description } = data;
    const CategoryEntity = this.entities.Category;
    const findCategory = await CategoryEntity.findOne({ where: { id } });

    const createSkill = await SkillEntity.create({
      name,
      description,
      category: findCategory,
    }).save();

    const skill = await SkillEntity.findOne(createSkill.id, {
      relations: ["category"],
    });

    return skill;
  }

  public async getSkills() {
    const SkillEntity = this.entities.Skill;
    const getSkills = await SkillEntity.find({
      relations: ["category"],
    });
    return getSkills;
  }

  public async getSkillById(id: any) {
    const SkillEntity = this.entities.Skill;
    const getSkillById = await SkillEntity.find({
      relations: ["category"],
      where: { id },
    });
    return getSkillById;
  }

  public async editSkill(data: any, id: any) {
    const SkillEntity = this.entities.Skill;
    const checkSkill = await SkillEntity.findOne({ where: { id } });
    if (checkSkill) {
      const result = await SkillEntity.merge(checkSkill, data).save();
      return result;
    }
  }

  public async deleteSkill(id: any) {
    const SkillEntity = this.entities.Skill;
    const deleteSkill = await SkillEntity.delete(id);
    return deleteSkill;
  }
}
