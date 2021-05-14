import { UserRepo } from "../../userRepo";

export class DeleteUser {
  private userRepo: UserRepo;

  constructor(userRepo: UserRepo) {
    this.userRepo = userRepo;
  }

  public async deleteUser(params: any) {
    const userId = { id: params.id };
    const deleteUser = await this.userRepo.deleteUser(userId);
    const messageUser = {
      deleteUser,
      message: "Le User a bien été supprimé !",
    };
    return messageUser;
  }
}
