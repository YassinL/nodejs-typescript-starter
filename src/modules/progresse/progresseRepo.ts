export class ProgresseRepo {
  private entities: any;

  constructor(entities: any) {
    this.entities = entities;
  }

  public async createProgress(userId: any, skillId: any) {
    const ProgressEntity = this.entities.Progresse;
    const UserEntity = this.entities.User;
    const SkillEntity = this.entities.Skill;
    const LevelEntity = this.entities.Level;

    const findUser = await UserEntity.findOne({ where: { id: userId } });
    const findSkill = await SkillEntity.findOne({ where: { id: skillId } });
    const findLevel = await LevelEntity.findOne({ where: { id: 1 } });

    const createProgress = await ProgressEntity.create({
      user: findUser,
      skill: findSkill,
      level: findLevel,
    }).save();

    const progress = await ProgressEntity.findOne(createProgress.id, {
      relations: ["user", "level", "skill"],
    });

    return progress;
  }

  public async getProgresse() {
    const ProgressEntity = this.entities.Progresse;

    const findProgress = await ProgressEntity.find({
      relations: ["user", "level", "skill"],
    });
    return findProgress;
  }

  public async getProgresseById(id: any) {
    const ProgressEntity = this.entities.Progresse;
    const findProgresseById = await ProgressEntity.find({ where: { id } });
    return findProgresseById;
  }

  public async editProgresse(data: any, id: any) {
    const ProgressEntity = this.entities.Progresse;
    const checkProgresse = await ProgressEntity.findOne({ where: { id } });
    if (checkProgresse) {
      const result = await ProgressEntity.merge(checkProgresse, data).save();
      return result;
    }
  }
  public async deleteProgresse(id: any) {
    const ProgressEntity = this.entities.Progresse;
    const deleteProgresse = await ProgressEntity.delete(id);
    return deleteProgresse;
  }
}
