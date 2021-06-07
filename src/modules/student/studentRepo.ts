export class StudentRepo {
  private entities: any;

  constructor(entities: any) {
    this.entities = entities;
  }

  public async createStudent(id: any, data: any) {
    const StudentEntity = this.entities.Student;
    const UsertEntity = this.entities.User;

    const findUser = await UsertEntity.findOne({ where: { id } });

    const { firstName, lastName } = data;
    const createStudent = await StudentEntity.create({
      firstName,
      lastName,
      user: findUser,
    }).save();
    console.log("student REPO", createStudent);
    const student = await StudentEntity.findOne(createStudent.id, {
      relations: ["user"],
    });

    return student;
  }

  public async getStudents() {
    const StudentEntity = this.entities.Student;
    const student = await StudentEntity.find({
      relations: ["user"],
    });
    return student;
  }

  public async getStudentById(id: any) {
    const StudentEntity = this.entities.Student;
    const student = await StudentEntity.find({ where: { id } });
    return student;
  }

  public async editStudent(data: any, id: any) {
    const StudentEntity = this.entities.Student;
    const checkStudent = await StudentEntity.findOne({ where: { id } });
    if (checkStudent) {
      const result = await StudentEntity.merge(checkStudent, data).save();
      return result;
    }
  }

  public async deleteStudent(id: any) {
    const StudentEntity = this.entities.Student;
    const deleteStudent = await StudentEntity.delete(id);
    return deleteStudent;
  }
}
