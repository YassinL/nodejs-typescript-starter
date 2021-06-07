import { ProgresseRepo } from "../../progresseRepo";

export class CreateProgresse {
  private progresseRepo: ProgresseRepo;

  constructor(progresseRepo: ProgresseRepo) {
    this.progresseRepo = progresseRepo;
  }

  public async createProgresse(studentId: any, skillId: any) {
    const createProgresse = await this.progresseRepo.createProgress(
      studentId,
      skillId
    );

    console.log("CREATE PROGRESSE SERVICE", createProgresse);
    return createProgresse;
  }
}
