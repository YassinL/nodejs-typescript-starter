import { ProgresseRepo } from "../../progresseRepo";

export class CreateProgresse {
  private progresseRepo: ProgresseRepo;

  constructor(progresseRepo: ProgresseRepo) {
    this.progresseRepo = progresseRepo;
  }

  public async createProgresse(data: any) {
    const { studentId, skillId, levelId } = data;
    const createProgresse = await this.progresseRepo.createProgress(
      studentId,
      skillId,
      levelId
    );

    console.log("CREATE PROGRESSE SERVICE", createProgresse);
    return createProgresse;
  }
}
