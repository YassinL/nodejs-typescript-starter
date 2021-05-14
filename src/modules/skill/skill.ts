import { Category } from "../category/category";

interface ISkill {
  name: string;
  description: string;
  categoryId: Category;
}

type skillProps = {
  name: string;
  description: string;
  categoryId: Category;
};

export class Skill implements ISkill {
  public name: string;
  public description: string;
  public categoryId: Category;

  constructor(props: skillProps) {
    this.name = props.name;
    this.description = props.description;
    this.categoryId = props.categoryId;
  }
}
