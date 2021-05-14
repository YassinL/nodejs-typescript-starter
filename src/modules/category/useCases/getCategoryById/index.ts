import { entitiesObject } from "../../../../app/database/typeorm/entities";
import { CategoryRepo } from "../../categoryRepo";
import { GetCategoryById } from "./getCategoryById";
import { GetCategoryByIdController } from "./getCategoryByIdController";

//Je construit mon repo avec les entités dont j'ai besoin
const categoryRepo = new CategoryRepo(entitiesObject);
const getCategoryById = new GetCategoryById(categoryRepo);
const getCategoryByIdController = new GetCategoryByIdController(
  getCategoryById
);

export { getCategoryById, getCategoryByIdController };
