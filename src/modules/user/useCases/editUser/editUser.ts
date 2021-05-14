import { UserRepo } from "../../userRepo";
import { hash } from "bcrypt";

export class EditUser {
  private userRepo: UserRepo;

  constructor(userRepo: UserRepo) {
    this.userRepo = userRepo;
  }

  public async editUser(userProps: any, params: any) {
    const user = {
      ...userProps,
      password: await hash(userProps.password, 10),
    };
    const editUser = await this.userRepo.editUser(user, params.id);
    return editUser;
  }
}
