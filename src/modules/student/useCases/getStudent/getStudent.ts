import { StudentRepo } from "../../studentRepo";

export class GetStudent {
  private studentRepo: StudentRepo;

  constructor(studentRepo: StudentRepo) {
    this.studentRepo = studentRepo;
  }

  public async getStudent() {
    return await this.studentRepo.getStudents();
  }
}
