import { entitiesObject } from "../../../../app/database/typeorm/entities";
import { CategoryRepo } from "../../categoryRepo";
import { DeleteCategory } from "./deleteCategory";
import { DeleteCategoryController } from "./deleteCategoryController";

//Je construit mon repo avec les entités dont j'ai besoin
const categoryRepo = new CategoryRepo(entitiesObject);
const deleteCategory = new DeleteCategory(categoryRepo);
const deleteCategoryController = new DeleteCategoryController(deleteCategory);

export { deleteCategory, deleteCategoryController };
