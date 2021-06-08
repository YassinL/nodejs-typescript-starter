export class HandleError extends Error {
  constructor(name: any, message: any) {
    super();
    this.name = name;
    this.message = message;
  }

  public async handleError(err: any, res: any) {
    const { message } = err;
    const statusCode = err.statusCode ? err.statusCode : 500;

    console.log(err);
    res.status(statusCode).json({
      statusCode,
      message,
    });
  }
}
