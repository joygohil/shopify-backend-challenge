import NotFoundError from './not-found.error.js';
import InternalServerError from './internal-server.error.js';
import ForbiddenError from './forbidden.error.js';
import ValidationError from './validation.error.js';
import DataConflictError from './data-conflict.error.js';

export default Object.freeze({
  ValidationError,
  InternalServerError,
  NotFoundError,
  ForbiddenError,
  DataConflictError,
});
