// Domain : Student

interface IStudent {
  id: number;
  firstname: string;
  lastname: string;
}

type studentProps = {
  id: number;
  firstname: string;
  lastname: string;
};

export class Student implements IStudent {
  public id: number;
  public firstname: string;
  public lastname: string;

  constructor(props: studentProps) {
    this.id = props.id;
    this.firstname = props.firstname;
    this.lastname = props.lastname;
  }
}
