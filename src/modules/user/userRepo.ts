// import { hash } from "bcrypt";

export class UserRepo {
  private entities: any;

  constructor(entities: any) {
    this.entities = entities;
  }

  public async createUser(data: any) {
    const UserEntity = this.entities.User;
    const { email, password } = data;
    // const hashedPassword = await hash(password, 10);
    const user = await UserEntity.create({
      email,
      password,
    }).save();
    console.log("user REPO", user);
    return user;
  }

  public async getUsers() {
    const UserEntity = this.entities.User;
    const user = await UserEntity.find();
    return user;
  }

  public async getUserById(id: any) {
    const UserEntity = this.entities.User;
    const user = await UserEntity.find({ where: { id } });
    return user;
  }

  public async getUserByEmail(email: any) {
    const UserEntity = this.entities.User;
    const user = await UserEntity.find({ where: { email } });
    console.log("Get user by email", user);
    return user;
  }

  public async editUser(data: any, id: any) {
    const UserEntity = this.entities.User;
    const checkUser = await UserEntity.findOne({ where: { id } });
    if (checkUser) {
      const result = await UserEntity.merge(checkUser, data).save();
      return result;
    }
  }

  public async deleteUser(id: any) {
    const UserEntity = this.entities.User;
    const deleteUser = await UserEntity.delete(id);
    return deleteUser;
  }
}
