import { entitiesObject } from "../../../../app/database/typeorm/entities";
import { CategoryRepo } from "../../categoryRepo";
import { EditCategory } from "./editCategory";
import { EditCategoryController } from "./editCategoryController";

//Je construit mon repo avec les entités dont j'ai besoin
const categoryRepo = new CategoryRepo(entitiesObject);
const editCategory = new EditCategory(categoryRepo);
const editCategoryController = new EditCategoryController(editCategory);

export { editCategory, editCategoryController };
