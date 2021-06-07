import { entitiesObject } from "../../../../app/database/typeorm/entities";
import { ProgresseRepo } from "../../progresseRepo";
import { CreateProgresse } from "./createProgresse";
import { CreateProgresseController } from "./createProgresseController";

const progresseRepo = new ProgresseRepo(entitiesObject);
const createProgresse = new CreateProgresse(progresseRepo);
const createProgresseController = new CreateProgresseController(
  createProgresse
);

export { createProgresse, createProgresseController };
