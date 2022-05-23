export default function makeUndoDeletedItemById({
  objectIdValidationSchema,
  schemaValidator,
  itemCollection,
  NotFoundError,
}) {
  async function undoDeletedItemById({ id }) {
    await schemaValidator(id, objectIdValidationSchema);
    const dbResponse = await itemCollection.findItemById({ itemId: id });
    if (dbResponse.length === 0) {
      throw new NotFoundError('No data found.', 'NotFoundError');
    }
    await itemCollection.updatedItemById({
      itemId: id,
      deletedAt: null,
    });
  }
  return undoDeletedItemById;
}
