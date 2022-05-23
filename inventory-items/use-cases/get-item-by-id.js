import makeItemEntity from '../entities/index.js';

const { makeItem } = makeItemEntity;

export default function makeGetItemById({
  objectIdValidationSchema,
  schemaValidator,
  itemCollection,
  NotFoundError,
}) {
  async function getItemById({ id }) {
    await schemaValidator(id, objectIdValidationSchema);
    const dbResponse = await itemCollection.findItemById({ itemId: id, deletedAt: null });
    if (dbResponse.length === 0) {
      throw new NotFoundError('No data found.', 'NotFoundError');
    }
    const item = await makeItem(...dbResponse);
    return {
      id: item.getId(),
      name: item.getName(),
      category: item.getCategory(),
      sizeInKg: item.getSizeInKg(),
      quantity: item.getQuantity(),
      tags: item.getTags(),
      createdAt: item.getCreatedAtDate(),
      updatedAt: item.getUpdatedAtDate(),
    };
  }
  return getItemById;
}
