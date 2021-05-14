// Domain : User

interface IUser {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

type userProps = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  passwword: string;
};

export class User implements IUser {
  public id: number;
  public firstname: string;
  public lastname: string;
  public email: string;
  public password: string;

  constructor(props: userProps) {
    this.id = props.id;
    this.firstname = props.firstname;
    this.lastname = props.lastname;
    this.email = props.email;
    this.password = props.passwword;
  }
}
