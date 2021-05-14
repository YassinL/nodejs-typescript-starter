import { CategoryPropsBody, CategoryParams } from "./categoryType";

export class CategoryRepo {
  private entities: any;

  constructor(entities: any) {
    //Category //User //Skill
    this.entities = entities;
  }

  public async createCategories(data: CategoryPropsBody) {
    const CategoryEntity = this.entities.Category;
    const { name, description } = data;
    const category = await CategoryEntity.create({ name, description }).save();
    return category;
  }

  public async getCategories() {
    const CategoryEntity = this.entities.Category;
    const category = await CategoryEntity.find();
    return category;
  }

  public async getCategoryById(id: CategoryParams) {
    const CategoryEntity = this.entities.Category;
    const category = await CategoryEntity.findOne({ where: { id: id } });
    return category;
  }

  public async editCategory(data: CategoryPropsBody, id: CategoryParams) {
    const CategoryEntity = this.entities.Category;
    const categoryId = await CategoryEntity.findOne({ where: { id: id } });
    console.log("get ID ===>", categoryId);
    if (categoryId) {
      const result = await CategoryEntity.merge(categoryId, data).save();
      return result;
    }
    // const updatecategory = await categoryId.update(data).save();
    // console.log("Update Category Repo =>", updatecategory);
  }

  public async deleteCategory(id: CategoryParams) {
    const CategoryEntity = this.entities.Category;
    const deleteCategory = await CategoryEntity.delete(id);
    console.log("DELETE REPO", deleteCategory);
    return deleteCategory;
  }
}
