import { CategoryRepo } from "../../categoryRepo";

export class EditCategory {
  private categoryRepo: CategoryRepo;

  constructor(categoryRepo: CategoryRepo) {
    this.categoryRepo = categoryRepo;
  }

  public async editCategory(bodyProps: any, params: any) {
    const updatecategory = await this.categoryRepo.editCategory(
      bodyProps,
      params.id
    );
    return updatecategory;
  }
}
