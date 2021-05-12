import { User } from "./user";
import { Skill } from "./skill";
import { Category } from "./category";
import { Level } from "./level";
import { Progresse } from "./progresse";

const entities = [User, Skill, Level, Category, Progresse];
const entitiesObject = { User, Skill, Category, Level };

export { entities, entitiesObject };
