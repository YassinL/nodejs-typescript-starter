import { UserRepo } from "../../userRepo";

export class GetUser {
  private userRepo: UserRepo;

  constructor(userRepo: UserRepo) {
    this.userRepo = userRepo;
  }

  public async getUser() {
    return await this.userRepo.getUsers();
  }
}
