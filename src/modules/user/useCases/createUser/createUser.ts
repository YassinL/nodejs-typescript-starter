import { UserRepo } from "../../userRepo";
import { hash } from "bcrypt";

export class CreateUser {
  private userRepo: UserRepo;

  constructor(userRepo: UserRepo) {
    this.userRepo = userRepo;
  }

  public async createUser(userProps: any) {
    const user = {
      ...userProps,
      password: await hash(userProps.password, 10),
    };
    const createUser = await this.userRepo.createUser(user);
    return createUser;
  }
}
