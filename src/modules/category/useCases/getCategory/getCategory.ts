import { CategoryRepo } from "../../categoryRepo";

export class GetCategory {
  private categoryRepo: CategoryRepo;

  constructor(categoryRepo: CategoryRepo) {
    this.categoryRepo = categoryRepo;
  }

  public async getCategories() {
    return await this.categoryRepo.getCategories();
  }
}
