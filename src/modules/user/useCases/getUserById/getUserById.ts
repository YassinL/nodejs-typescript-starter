import { UserRepo } from "../../userRepo";

export class GetUserById {
  private userRepo: UserRepo;

  constructor(userRepo: UserRepo) {
    this.userRepo = userRepo;
  }

  public async getUserById(params: any) {
    const getUserById = await this.userRepo.getUserById(params);
    return getUserById;
  }
}
