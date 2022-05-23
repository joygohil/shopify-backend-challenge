import makeItemEntity from '../entities/index.js';

const { makeItem } = makeItemEntity;

export default function makeUpdateItemById({
  objectIdValidationSchema,
  inventoryItemValidationSchema,
  schemaValidator,
  itemCollection,
  getItemByName,
  NotFoundError,
  DataConflictError,
}) {
  async function updateItemById({ id, ...dataToBeUpdated }) {
    await schemaValidator(id, objectIdValidationSchema);
    const dbResponse = await itemCollection.findItemById({ itemId: id, deletedAt: null });
    if (dbResponse.length === 0) {
      throw new NotFoundError('No data found.', 'NotFoundError');
    }
    await schemaValidator({ ...dbResponse, ...dataToBeUpdated }, inventoryItemValidationSchema);
    const item = await makeItem({ ...dbResponse[0], ...dataToBeUpdated });
    if (dataToBeUpdated && dataToBeUpdated.name != null) {
      let itemWithSameName = null;
      try {
        itemWithSameName = await getItemByName(dataToBeUpdated.name);
      } catch (e) {
        if (!(e instanceof NotFoundError)) {
          throw e;
        }
      }
      if (itemWithSameName && itemWithSameName.getName()) {
        throw new DataConflictError('Name already exist. Please try updating it.', 'DataConflictError');
      }
    }
    await itemCollection.updatedItemById({
      itemId: id,
      name: item.getName(),
      category: item.getCategory(),
      sizeInKg: item.getSizeInKg(),
      quantity: item.getQuantity(),
      tags: item.getTags(),
      updatedAt: item.getUpdatedAtDate(),
    });
  }
  return updateItemById;
}
