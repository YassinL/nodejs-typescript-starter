import { entitiesObject } from "../../../../app/database/typeorm/entities";
import { StudentRepo } from "../../studentRepo";
import { EditStudent } from "./editStudent";
import { EditStudentController } from "./editStudentController";

const studentRepo = new StudentRepo(entitiesObject);
const editStudent = new EditStudent(studentRepo);
const editStudentController = new EditStudentController(editStudent);

export { editStudent, editStudentController };
