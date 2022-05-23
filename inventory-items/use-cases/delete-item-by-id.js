import makeItemEntity from '../entities/index.js';

const { makeItem } = makeItemEntity;

export default function makeDeleteItemById({
  deletionCommentValidationSchema,
  objectIdValidationSchema,
  schemaValidator,
  itemCollection,
  NotFoundError,
}) {
  async function deleteItemById({ id, deletionComment }) {
    await schemaValidator(id, objectIdValidationSchema);
    await schemaValidator(deletionComment, deletionCommentValidationSchema);
    const dbResponse = await itemCollection.findItemById(id);
    if (dbResponse.length === 0) {
      throw new NotFoundError('No data found.', 'NotFoundError');
    }
    const item = await makeItem({ ...dbResponse[0], deletionComment });
    await itemCollection.updatedItemById({
      itemId: id,
      deletionComment: item.getDeletionComment(),
      deletedAt: item.getDeletedAtDate(),
    });
  }
  return deleteItemById;
}
