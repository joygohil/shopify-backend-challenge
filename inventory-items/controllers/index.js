import moment from 'moment';
import itemUseCases from '../use-cases/index.js';
import makeGetServiceStatusController from './get-service-status.js';
import makeAddItemController from './add-inventory-item.js';
import makeGetItemByIdController from './get-item-by-id.js';
import makeDeleteItemByIdController from './delete-item-by-id.js';
import makeUpdateItemByIdController from './update-item-by-id.js';

const {
  addItem,
  getItemById,
  deleteItemById,
  updateItemById,
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

const updateItemByIdController = makeUpdateItemByIdController({
  moment,
  updateItemById,
});

export default Object.freeze({
  getServiceStatusController,
  addItemController,
  getItemByIdController,
  deleteItemByIdController,
  updateItemByIdController,
});
