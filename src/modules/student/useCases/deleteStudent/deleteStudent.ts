import { StudentRepo } from "../../studentRepo";

export class DeleteStudent {
  private studentRepo: StudentRepo;

  constructor(studentRepo: StudentRepo) {
    this.studentRepo = studentRepo;
  }

  public async deleteStudent(params: any) {
    const studentId = { id: params.id };
    const deleteStudent = await this.studentRepo.deleteStudent(studentId);
    const messageStudent = {
      deleteStudent,
      message: "Le Student a bien été supprimé !",
    };
    return messageStudent;
  }
}
