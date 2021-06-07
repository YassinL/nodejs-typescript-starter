export class JwtService {
  private jwt: any;
  private secret: any;

  constructor(jwt: any, secret: any) {
    this.jwt = jwt;
    this.secret = secret;
  }

  public async generateToken(data: any) {
    return await this.jwt.sign(
      { email: data.email, id: data.id, admin: data.isAdmin },
      this.secret
    );
  }

  public async verifyToken(token: any) {
    return await this.jwt.verify(token, this.secret);
  }
}
