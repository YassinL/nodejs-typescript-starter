import { ProgresseRepo } from "../../progresseRepo";

export class GetProgresse {
  private progresseRepo: ProgresseRepo;

  constructor(progresseRepo: ProgresseRepo) {
    this.progresseRepo = progresseRepo;
  }

  public async getProgresse() {
    const getProgresse = await this.progresseRepo.getProgresse();
    return getProgresse;
  }
}
