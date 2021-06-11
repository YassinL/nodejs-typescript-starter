import { UserRepo } from "../../userRepo";
import { hash } from "bcrypt";

export class CreateUser {
  private userRepo: UserRepo;

  constructor(userRepo: UserRepo) {
    this.userRepo = userRepo;
  }

  public async createUser(userProps: any) {
    try {
      const checkUser = await this.userRepo.getUserByEmail(userProps.email);
      if (checkUser) {
        console.log("message: User already exists");
        return {
          succes: false,
          message: "User already exists",
        };
      }
      const user = {
        ...userProps,
        password: await hash(userProps.password, 10),
      };
      await this.userRepo.createUser(user);
      return {
        success: true,
        message: "User is correctly created",
      };
    } catch (err) {
      return {
        message: err,
      };
    }
  }
}
