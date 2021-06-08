// Domaine : Level

interface ILevel {
  id: number;
  number: number;
  name: string;
}

type levelProps = {
  id: number;
  number: number;
  name: string;
};

export class Level implements ILevel {
  public id: number;
  public number: number;
  public name: string;

  constructor(props: levelProps) {
    this.id = props.id;
    this.number = props.number;
    this.name = props.name;
  }
}
