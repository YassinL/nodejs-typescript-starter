import { ProgresseRepo } from "../../progresseRepo";

export class CreateProgresse {
  private progresseRepo: ProgresseRepo;

  constructor(progresseRepo: ProgresseRepo) {
    this.progresseRepo = progresseRepo;
  }

  public async createProgresse(userId: any, skillId: any) {
    const createProgresse = await this.progresseRepo.createProgress(
      userId,
      skillId
    );

    console.log("CREATE PROGRESSE SERVICE", createProgresse);
    return createProgresse;
  }
}
