export class ProgresseRepo {
  private entities: any;

  constructor(entities: any) {
    this.entities = entities;
  }

  public async createProgress(studentId: any, skillId: any, levelId: any) {
    const ProgressEntity = this.entities.Progresse;
    const StudentEntity = this.entities.Student;
    const SkillEntity = this.entities.Skill;
    const LevelEntity = this.entities.Level;

    const findStudent = await StudentEntity.findOne({
      where: { id: studentId },
    });
    const findSkill = await SkillEntity.findOne({ where: { id: skillId } });
    const findLevel = await LevelEntity.findOne({ where: { id: levelId } });

    const createProgress = await ProgressEntity.create({
      student: findStudent,
      skill: findSkill,
      level: findLevel,
    }).save();

    const progress = await ProgressEntity.findOne(createProgress.id, {
      relations: ["student", "level", "skill"],
    });

    return progress;
  }

  public async getProgresse() {
    const ProgressEntity = this.entities.Progresse;

    const findProgress = await ProgressEntity.find({
      relations: ["student", "level", "skill"],
    });
    return findProgress;
  }
}
