import express from 'express';
import inventoryItemController from './controllers/index.js';
import makeHttpCallback from '../helper/http-callback.js';

const router = express.Router();
const {
  getServiceStatusController,
  addItemController,
  getItemByIdController,
  deleteItemByIdController,
  updateItemByIdController,
} = inventoryItemController;

router.get('/status', makeHttpCallback({ controller: getServiceStatusController }));
router.get('/:id', makeHttpCallback({ controller: getItemByIdController }));
router.get('/list/', makeHttpCallback({ controller: getServiceStatusController }));
router.post('/', makeHttpCallback({ controller: addItemController }));
router.put('/:id', makeHttpCallback({ controller: updateItemByIdController }));
router.delete('/:id', makeHttpCallback({ controller: deleteItemByIdController }));

export default router;
