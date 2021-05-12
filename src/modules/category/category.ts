//Domain : Category

interface ICategory {
  id: number;
  name: string;
  description: string;
}

export type CategoryProps = {
  id: number;
  name: string;
  description: string;
};

export class Category implements ICategory {
  public id: number;
  public name: string;
  public description: string;

  constructor(props: CategoryProps) {
    this.id = props.id;
    this.name = props.name;
    this.description = props.description;
  }
}
