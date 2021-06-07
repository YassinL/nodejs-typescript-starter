import { entitiesObject } from "../../../../app/database/typeorm/entities";
import { StudentRepo } from "../../studentRepo";
import { GetStudentById } from "./getStudentById";
import { GetStudentByIdController } from "./getStudentByIdController";

const studentRepo = new StudentRepo(entitiesObject);
const getStudentById = new GetStudentById(studentRepo);
const getStudentByIdController = new GetStudentByIdController(getStudentById);

export { getStudentById, getStudentByIdController };
