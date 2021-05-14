import { CategoryRepo } from "../../categoryRepo";
import { CategoryParams } from "../../categoryType";

export class DeleteCategory {
  private categoryRepo: CategoryRepo;

  constructor(categoryRepo: CategoryRepo) {
    this.categoryRepo = categoryRepo;
  }

  public async deleteCategory(params: CategoryParams) {
    const categoryId = { id: params.id };
    const deleteCategory = await this.categoryRepo.deleteCategory(categoryId);
    const messageCategory = {
      deleteCategory,
      message: "La catégory a bien été supprimé !",
    };
    return messageCategory;
  }
}
