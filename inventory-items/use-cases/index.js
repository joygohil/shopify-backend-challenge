import moment from 'moment';
import lodash from 'lodash';
import exception from '../../exception/index.js';
import schemaValidator from '../../helper/schema-validator.js';
import getItemCollection from '../data-access/index.js';
import inventoryItemValidationSchema from '../validations/item.model.js';
import deletionCommentValidationSchema from '../validations/deletion-comment.model.js';
import objectIdValidationSchema from '../validations/object-id-validation.model.js';
import makeAddItem from './add-item.js';
import makeGetItemById from './get-item-by-id.js';
import makeGetItemByName from './get-item-by-name.js';
import makeDeleteItemById from './delete-item-by-id.js';
import makeUndoDeletedItemById from './undo-deleted-item-by-id.js';
import makeUpdateItemById from './update-item-by-id.js';
import makeListItem from './list-item.js';

const { escapeRegExp, isEqual } = lodash;

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
  itemCollection,
});
const getItemByName = makeGetItemByName({
  itemCollection, NotFoundError,
});
const deleteItemById = makeDeleteItemById({
  deletionCommentValidationSchema,
  objectIdValidationSchema,
  schemaValidator,
  itemCollection,
  NotFoundError,
});
const undoDeletedItemById = makeUndoDeletedItemById({
  deletionCommentValidationSchema,
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
  undoDeletedItemById,
});
