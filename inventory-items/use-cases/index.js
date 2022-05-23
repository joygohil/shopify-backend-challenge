import moment from 'moment';
import { escapeRegExp, isEqual } from 'lodash';
import exception from '../../exception/index.js';
import schemaValidator from '../../helper/schema-validator.js';
import getItemCollection from '../data-access/index.js';
import inventoryItemValidationSchema from '../validations/item.model.js';
import objectIdValidationSchema from '../validations/object-id-validation.model.js';
import makeAddItem from './add-item.js';
import makeGetItemById from './get-item-by-id.js';
import makeGetItemByName from './get-item-by-name.js';
import makeDeleteItemById from './delete-item-by-id.js';
import makeUpdateItemById from './update-item-by-id.js';
import makeListItem from './list-item.js';

const {
  NotFoundError,
  InternalServerError,
  ValidationError,
  DataConflictError,
} = exception;
const { itemCollection } = getItemCollection;
const listItem = makeListItem({
  escapeRegExp,
  isEqual,
});
const getItemByName = makeGetItemByName({
  itemCollection, NotFoundError,
});
const deleteItemById = makeDeleteItemById({
  objectIdValidationSchema,
  schemaValidator,
  itemCollection,
  NotFoundError,
});
const updateItemById = makeUpdateItemById({
  objectIdValidationSchema,
  inventoryItemValidationSchema,
  schemaValidator,
  itemCollection,
  getItemByName,
  NotFoundError,
  DataConflictError,
});
const getItemById = makeGetItemById({
  objectIdValidationSchema,
  schemaValidator,
  itemCollection,
  NotFoundError,
});
const addItem = makeAddItem({
  moment,
  getItemByName,
  inventoryItemValidationSchema,
  schemaValidator,
  itemCollection,
  InternalServerError,
  ValidationError,
  DataConflictError,
  NotFoundError,
});
export default Object.freeze({
  addItem,
  getItemById,
  deleteItemById,
  updateItemById,
  listItem,
});
