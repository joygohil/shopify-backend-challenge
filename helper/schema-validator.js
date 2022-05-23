// import third-party libraries
// eslint-disable-next-line no-unused-vars
// import errors
import joi from '@hapi/joi';
import _ from 'lodash';
import exception from '../exception/index.js';

const {
  InternalServerError,
  ValidationError,
} = exception;
// validation options for joi
const validationOptions = {
  abortEarly: false, // abort after the last validation error
  allowUnknown: true, // allow unknown keys that will be ignored
  stripUnknown: true, // remove unknown keys from the validated data
};
// create a object of schemas
/**
 *
 * @param {*} object
 * @param {*} validationSchema
 * @returns
 */
const schemaValidator = (object, validationSchema) => new Promise((resolve, reject) => {
  if (!object) {
    reject(new ValidationError('Invalid parameters passed.', 'ValidationError'));
  }
  if (!validationSchema) {
    reject(new InternalServerError('Something went wrong.', 'ValidationError'));
  }
  // validate the object with specified schema type
  const { error, value } = validationSchema(joi).validate(object, validationOptions);
  if (error) {
    // extract the multiple error in array
    const extractedError = _.map(error.details, ({ message }) => (message.replace(/['"]/g, '')));
    reject(new ValidationError(JSON.stringify(extractedError), 'ValidationError'));
  }
  resolve(value);
});

export default schemaValidator;
