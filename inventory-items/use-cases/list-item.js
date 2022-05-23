export default function makeListItem({
  itemCollection,
}) {
  function generateQuery(requestQuery) {
    const queryObj = {};
    queryObj.name = { $regex: requestQuery.name || '', $options: 'i' };
    queryObj.category = { $regex: requestQuery.category || '', $options: 'i' };
    queryObj.tags = { $regex: requestQuery.tags || '', $options: 'i' };
    queryObj.deletedAt = { $eq: null };
    queryObj.sizeInKg = {
      $gte: requestQuery.minSize || 0,
      $lte: requestQuery.maxSize || 10,
    };
    queryObj.quantity = {
      $gte: requestQuery.minQuantity || 0,
      $lte: requestQuery.maxQuantity || 10,
    };
    return queryObj;
  }
  async function listItem({ ...query }) {
    const sortOrder = query.sortOrder || 'name';
    const sortBy = query.sortBy || 1;
    const { ...otherFilters } = generateQuery(query);
    console.log(otherFilters);
    return itemCollection.filterAllItems({
      sortOrder,
      sortBy,
      ...otherFilters,
    });
  }
  return listItem;
}
