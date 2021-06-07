import { StudentRepo } from "../../studentRepo";

export class GetStudentById {
  private studentRepo: StudentRepo;

  constructor(studentRepo: StudentRepo) {
    this.studentRepo = studentRepo;
  }

  public async getStudentById(params: any) {
    const getStudentById = await this.studentRepo.getStudentById(params);
    return getStudentById;
  }
}
