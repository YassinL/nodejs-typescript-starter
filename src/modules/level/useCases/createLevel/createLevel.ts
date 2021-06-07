//UseCase -> Service -> de la logique
import { LevelRepo } from "../../levelRepo";

export class CreateLevel {
  private levelRepo: LevelRepo;

  constructor(levelRepo: LevelRepo) {
    this.levelRepo = levelRepo;
  }

  public async createLevels(bodyProps: any) {
    const level = {
      number: bodyProps.number,
      name: bodyProps.name,
    };
    return await this.levelRepo.createLevels(level);
  }
}
