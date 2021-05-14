import { Router } from "express";
import { createCategoryController } from "./useCases/createCategory/";
import { getCategoryController } from "./useCases/getCategory/";
import { getCategoryByIdController } from "./useCases/getCategoryById/";
import { editCategoryController } from "./useCases/editCategory/";
import { deleteCategoryController } from "./useCases/deleteCategory";

const categoryRouter: Router = Router();

///api/v1/category/
categoryRouter.post("/", (request, response) => {
  createCategoryController.execute(request, response);
});

categoryRouter.get("/", (request, response) =>
  getCategoryController.execute(request, response)
);

categoryRouter.get("/:id", (request, response) =>
  getCategoryByIdController.execute(request, response)
);

categoryRouter.patch("/:id", (request, response) => {
  editCategoryController.execute(request, response);
});

categoryRouter.delete("/:id", (request, response) => {
  deleteCategoryController.execute(request, response);
});

export { categoryRouter };
