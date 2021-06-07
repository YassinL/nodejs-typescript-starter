import { Student } from "./student";
import { Skill } from "./skill";
import { Category } from "./category";
import { Level } from "./level";
import { Progresse } from "./progresse";
import { User } from "./user";

const entities = [Category, User, Student, Skill, Level, Progresse];
const entitiesObject = { Category, User, Student, Skill, Level, Progresse };

export { entities, entitiesObject };
