import { CategoryRepo } from "../../categoryRepo";

export class GetCategoryById {
  private categoryRepo: CategoryRepo;

  constructor(categoryRepo: CategoryRepo) {
    this.categoryRepo = categoryRepo;
  }

  public async getCategoryById(params: any) {
    const category = await this.categoryRepo.getCategoryById(params);
    return category;
  }
}
