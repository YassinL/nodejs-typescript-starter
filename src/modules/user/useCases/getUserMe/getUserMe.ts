import { UserRepo } from "../../userRepo";

export class GetUserMe {
  private userRepo: UserRepo;

  constructor(userRepo: UserRepo) {
    this.userRepo = userRepo;
  }

  public async getUserMe(userId: any) {
    const result = await this.userRepo.getUserById(userId);
    console.log("RESULT USER ME ===>", result);
    console.log("HERE");
    return result;
  }
}
