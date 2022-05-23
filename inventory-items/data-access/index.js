import Mongoose from 'mongoose';
import config from '../../config/local.js';
import itemModel from '../models/item-model.js';
import makeItemCollection from './item-collection.js';
import exception from '../../exception/index.js';

const { mongo } = config;
const options = Object.freeze({
  autoIndex: false, // Don't build indexes
  // If not connected, return errors immediately rather than waiting for reconnect
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
Mongoose.set('debug', mongo.debug || false);
function getMongoDbConnectionUrl() {
  const credentials = mongo.username ? `${mongo.username}:${mongo.password}@` : '';
  return `mongodb+srv://${credentials}${mongo.hosts}/${mongo.database}?retryWrites=true&w=majority`;
}
const makeMongoConnection = async () => {
  if (Mongoose.connection.readyState) {
    return Mongoose;
  }
  await Mongoose.connect(getMongoDbConnectionUrl(), options);
  // eslint-disable-next-line no-console
  console.info(`Worker ${process.pid} connected to Mongo Database`);
  return Mongoose;
};

const {
  InternalServerError,
} = exception;

const itemCollection = makeItemCollection({
  InternalServerError,
  makeMongoConnection,
  itemModel,
});
export default Object.freeze({
  itemCollection,
});
