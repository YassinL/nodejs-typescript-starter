export class LevelRepo {
  private entities: any;

  constructor(entities: any) {
    //Level
    this.entities = entities;
  }

  public async createLevels(data: any) {
    const LevelEntity = this.entities.Level;
    const { number, name } = data;
    const level = await LevelEntity.create({ number, name }).save();
    return level;
  }

  public async getLevels() {
    const LevelEntity = this.entities.Level;
    const level = await LevelEntity.find();
    return level;
  }

  public async getLevelById(id: any) {
    const LevelEntity = this.entities.Level;
    const level = await LevelEntity.findOne({
      where: { id },
    });
    return level;
  }

  public async editLevel(data: any, id: any) {
    const LevelEntity = this.entities.Level;
    const levelId = await LevelEntity.findOne({
      where: { id },
    });
    if (levelId) {
      const result = await LevelEntity.merge(levelId, data).save();
      return result;
    }
  }

  public async deleteLevel(id: any) {
    const LevelEntity = this.entities.Level;
    const deleteLevel = await LevelEntity.delete(id);
    return deleteLevel;
  }
}
