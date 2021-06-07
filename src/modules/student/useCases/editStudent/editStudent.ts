import { StudentRepo } from "../../studentRepo";

export class EditStudent {
  private studentRepo: StudentRepo;

  constructor(studentRepo: StudentRepo) {
    this.studentRepo = studentRepo;
  }

  public async editStudent(studentProps: any, params: any) {
    const editStudent = await this.studentRepo.editStudent(
      studentProps,
      params.id
    );
    return editStudent;
  }
}
