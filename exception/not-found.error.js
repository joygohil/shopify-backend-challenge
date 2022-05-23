class NotFoundError extends Error {
  constructor(...params) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(...params);

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, NotFoundError);
    }
    if (params[2]) {
      console.error(params[2]);
    }
    this.name = 'NotFound';
    // Custom debugging information
    this.httpStatusCode = 404;
    this.errorMessage = params[0] || null;
    this.errorCode = params[1] || null;
    this.date = new Date();
  }
}
export default NotFoundError;
