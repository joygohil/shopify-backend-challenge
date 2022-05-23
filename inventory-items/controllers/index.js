import moment from 'moment';
import itemUseCases from '../use-cases/index.js';
import makeGetServiceStatusController from './get-service-status.js';
import makeAddItemController from './add-item.js';
import makeGetItemByIdController from './get-item-by-id.js';
import makeDeleteItemByIdController from './delete-item-by-id.js';
import makeUndoDeletedItemByIdController from './undo-deleted-item-by-id.js';
import makeUpdateItemByIdController from './update-item-by-id.js';
import makeListItemController from './list-item.js';

const {
  addItem,
  getItemById,
  deleteItemById,
  updateItemById,
  listItem,
  undoDeletedItemById,
} = itemUseCases;

const getServiceStatusController = makeGetServiceStatusController({ moment });

const getItemByIdController = makeGetItemByIdController({
  moment,
  getItemById,
});

const addItemController = makeAddItemController({
  moment,
  addItem,
});

const deleteItemByIdController = makeDeleteItemByIdController({
  moment,
  deleteItemById,
});

const undoDeletedItemByIdController = makeUndoDeletedItemByIdController({
  moment,
  undoDeletedItemById,
});

const updateItemByIdController = makeUpdateItemByIdController({
  moment,
  updateItemById,
});

const listItemController = makeListItemController({
  moment,
  listItem,
});

export default Object.freeze({
  getServiceStatusController,
  addItemController,
  getItemByIdController,
  deleteItemByIdController,
  updateItemByIdController,
  listItemController,
  undoDeletedItemByIdController,
});
