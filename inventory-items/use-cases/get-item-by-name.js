import makeItemEntity from '../entities/index.js';

const { makeItem } = makeItemEntity;

export default function makeGetItemByName({
  itemCollection,
  NotFoundError,
}) {
  async function getItemByName(itemName) {
    const dbResponse = await itemCollection.findItemByName(itemName);
    if (dbResponse.length === 0) {
      throw new NotFoundError('No data found.', 'NotFoundError');
    }
    return makeItem(...dbResponse);
  }
  return getItemByName;
}
