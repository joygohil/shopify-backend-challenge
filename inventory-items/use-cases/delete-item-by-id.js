import makeItemEntity from '../entities/index.js';

const { makeItem } = makeItemEntity;

export default function makeDeleteItemById({
  objectIdValidationSchema,
  schemaValidator,
  itemCollection,
  NotFoundError,
}) {
  async function deleteItemById({ id }) {
    await schemaValidator(id, objectIdValidationSchema);
    const dbResponse = await itemCollection.findItemById(id);
    if (dbResponse.length === 0) {
      throw new NotFoundError('No data found.', 'NotFoundError');
    }
    const item = await makeItem(...dbResponse);
    await itemCollection.updatedItemById({ itemId: id, deletedAt: item.getDeletedAtDate() });
  }
  return deleteItemById;
}
