/**
 * @method
 * @param dbConnection
 * @returns {*}
 */
export default function makeItemModelConnection({ mongoConnection }) {
  try {
    return mongoConnection.model('Item');
  } catch (e) {
    const itemSchema = new mongoConnection.Schema({
      name: { type: String, trim: true, required: true },
      category: { type: String, trim: true, required: true },
      sizeInKg: { type: Number, required: true, default: 0 },
      quantity: { type: Number, required: true, default: 0 },
      tags: { type: String, trim: true, required: true },
      deletionComment: { type: String, trim: true, default: null },
      createdAt: { type: Date, default: Date.now(), required: true },
      updatedAt: { type: Date, default: Date.now() },
      deletedAt: { type: Date, default: null },
    }, { collection: 'Item' });
    return mongoConnection.model('Item', itemSchema);
  }
}
