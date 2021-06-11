import { UserRepo } from "../../userRepo";
import { JwtService } from "../../../../libs/jwtService";
import { compare } from "bcrypt";

export class LoginUser {
  private userRepo: UserRepo;
  private jwtService: JwtService;

  constructor(userRepo: UserRepo, jwtService: JwtService) {
    this.userRepo = userRepo;
    this.jwtService = jwtService;
  }

  public async loginUser(dataUser: any) {
    const { email, password } = dataUser;
    try {
      const userFound = await this.userRepo.getUserByEmail(email);
      console.log("USERFOUND", userFound);
      if (!userFound) {
        return {
          success: false,
          message: "Incorrect Email",
        };
      }

      const comparePassword = await compare(password, userFound.password);
      console.log("COMPARE PASSWORD", comparePassword);
      if (!comparePassword) {
        console.log("Mot de passe incorrect");
        return {
          success: false,
          message: "Incorrect Password",
        };
      }
      const createToken = await this.jwtService.generateToken(userFound);
      console.log("CREATE TOKEN", createToken);

      return {
        success: true,
        createToken,
      };
    } catch (err) {
      return {
        message: err,
      };
    }
  }
}
