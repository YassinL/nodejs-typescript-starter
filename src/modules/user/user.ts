// Domain : User

interface IUser {
  id: number;
  email: string;
  password: string;
  isAdmin: boolean;
}

type userProps = {
  id: number;
  email: string;
  password: string;
  isAdmin: boolean;
};

export class User implements IUser {
  public id: number;
  public email: string;
  public password: string;
  public isAdmin: boolean;

  constructor(props: userProps) {
    this.id = props.id;
    this.email = props.email;
    this.password = props.password;
    this.isAdmin = props.isAdmin;
  }
}
