import { entitiesObject } from "../../../../app/database/typeorm/entities";
import { StudentRepo } from "../../studentRepo";
import { DeleteStudentController } from "./deleteStudentController";
import { DeleteStudent } from "./deleteStudent";

const studentRepo = new StudentRepo(entitiesObject);
const deleteStudent = new DeleteStudent(studentRepo);
const deleteStudentController = new DeleteStudentController(deleteStudent);

export { deleteStudent, deleteStudentController };
