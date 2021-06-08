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

  public async loginUser(res: any, dataUser: any) {
    const { email, password } = dataUser;
    const userFound = await this.userRepo.getUserByEmail(email);

    const comparePassword = await compare(password, userFound[0].password);

    if (!comparePassword) {
      console.log("Mot de passe incorrect");
    }
    const createToken = await this.jwtService.generateToken(userFound);

    return res.cookie("token", createToken, {
      maxAge: 3600000,
      secure: false,
      httpOnly: true,
    });
  }
}
