export class UserRepo {
  private entities: any;

  constructor(entities: any) {
    this.entities = entities;
  }

  public async createUser(data: any) {
    const UserEntity = this.entities.User;
    const { email, password } = data;

    const checkUser = await this.getUserByEmail(email);
    if (!checkUser) {
      await UserEntity.create({
        email,
        password,
      }).save();
    }

    return;
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

  public async getUserByEmail(email: string) {
    const UserEntity = this.entities.User;
    const user = await UserEntity.findOne({ where: { email } });
    return user;
  }

  public async exists(email: string): Promise<boolean> {
    const UserEntity = this.entities.User;

    const result = await UserEntity.findOne({ email: email });

    return !!result === true;
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
