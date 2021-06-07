import { StudentRepo } from "../../studentRepo";

export class CreateStudent {
  private studentRepo: StudentRepo;

  constructor(studentRepo: StudentRepo) {
    this.studentRepo = studentRepo;
  }

  public async createStudent(userId: any, studentProps: any) {
    const createStudent = await this.studentRepo.createStudent(
      userId,
      studentProps
    );
    return createStudent;
  }
}
