import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { createRequire } from 'module';
import inventoryItemController from './controllers/index.js';
import makeHttpCallback from '../helper/http-callback.js';
// Bring in the ability to create the 'require' method
const require = createRequire(import.meta.url);
// eslint-disable-next-line import/extensions
const swaggerDocument = require('./swagger.json');

const router = express.Router();
const {
  getServiceStatusController,
  addItemController,
  getItemByIdController,
  deleteItemByIdController,
  updateItemByIdController,
  listItemController,
  undoDeletedItemByIdController,
} = inventoryItemController;

// const options = {
//   explorer: true,
//   swaggerOptions: {
//     urls: [
//       {
//         url: 'http://petstore.swagger.io/v2/swagger.json',
//         name: 'Spec1',
//       },
//     ],
//   },
// };

router.get('/status', makeHttpCallback({ controller: getServiceStatusController }));
router.get('/item/list/', makeHttpCallback({ controller: listItemController }));
router.get('/item/:id', makeHttpCallback({ controller: getItemByIdController }));
router.post('/item/', makeHttpCallback({ controller: addItemController }));
router.put('/item/:id', makeHttpCallback({ controller: updateItemByIdController }));
router.delete('/item/:id', makeHttpCallback({ controller: deleteItemByIdController }));
router.put('/item/undo-deletion/:id', makeHttpCallback({ controller: undoDeletedItemByIdController }));
router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default router;
