export default function makeAddItem({
  getItemByName,
  inventoryItemValidationSchema,
  schemaValidator,
  itemCollection,
  DataConflictError,
  NotFoundError,
}) {
  async function addItem({ ...itemInfo }) {
    await schemaValidator(itemInfo, inventoryItemValidationSchema);
    let item = null;
    try {
      item = await getItemByName(itemInfo.name);
    } catch (e) {
      if (!(e instanceof NotFoundError)) {
        throw e;
      }
    }
    if (item && item.getName()) {
      throw new DataConflictError('Name already exist. Please try updating it.', 'DataConflictError');
    }
    return itemCollection.insertItem(itemInfo);
  }
  return addItem;
}
