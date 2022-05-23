export default function makeListItem({
  itemCollection,
}) {
  function generateQuery(requestQuery) {
    const queryObj = {};
    queryObj.name = { $regex: requestQuery.category || '', $options: 'i' };
    queryObj.name = { $regex: requestQuery.name || '', $options: 'i' };
    queryObj.tags = { $regex: requestQuery.tags || '', $options: 'i' };
    queryObj.deletedBy = null;
    queryObj.sizeInKg = {
      $min: requestQuery.minSize || 0,
      $max: requestQuery.maxSize || Number.MAX_VALUE,
    };
    queryObj.quantity = {
      $min: requestQuery.minQuantity || 0,
      $max: requestQuery.maxQuantity || Number.MAX_VALUE,
    };
    return queryObj;
  }
  async function listItem({ ...query }) {
    const sortOrder = query.sortOrder || 'name';
    const sortBy = query.sortBy || 1;
    const { parentTypeId, ...otherFilters } = generateQuery(query);
    return itemCollection.filterAllItems({
      sortOrder,
      sortBy,
      parentTypeId,
      ...otherFilters,
    });
  }
  return listItem;
}
