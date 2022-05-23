class ForbiddenError extends Error {
  constructor(...params) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(...params);

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ForbiddenError);
    }

    this.name = 'Forbidden';
    // Custom debugging information
    this.httpStatusCode = 403;
    this.errorMessage = params[0] || null;
    this.errorCode = params[1] || null;
    this.date = new Date();
  }
}
export default ForbiddenError;
