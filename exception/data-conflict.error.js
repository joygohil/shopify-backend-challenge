class DataConflictError extends Error {
  constructor(...params) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, DataConflictError);
    }
    if (params[2]) {
      console.error(params[2]);
    }
    this.name = 'DataConflict';
    this.errorCode = params[1] || null;
    this.errorMessage = params[0] || null;
    this.httpStatusCode = 409;
    this.date = new Date();
  }
}
export default DataConflictError;
