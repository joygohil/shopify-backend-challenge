export default function makeItemCollection({
  makeMongoConnection,
  itemModel,
  InternalServerError,
}) {
  /**
   *
   * @param {*} param0
   * @returns
   */
  async function insertItem({
    ...itemInfo
  }) {
    try {
      const mongoConnection = await makeMongoConnection();
      return await itemModel({ mongoConnection }).create({ ...itemInfo });
    } catch ({ message: ErrorMessage, name: ErrorName }) {
      throw new InternalServerError('Something went wrong.', 'InternalDatabaseError', { ErrorName, ErrorMessage });
    }
  }
  /**
   *
   * @param {*} param0
   * @returns
   */
  async function findItemById({ itemId, ...filterObj }) {
    try {
      const mongoConnection = await makeMongoConnection();
      return (await itemModel({ mongoConnection })
        .find({ _id: itemId, ...filterObj }).lean()).map(({
        _id: id,
        ...otherDetails
      }) => ({
        id: id.toString(),
        ...otherDetails,
      }));
    } catch ({ message: ErrorMessage, name: ErrorName }) {
      throw new InternalServerError('Something went wrong.', 'InternalDatabaseError', { ErrorName, ErrorMessage });
    }
  }
  /**
   *
   * @param {*} param0
   * @returns
   */
  async function findItemByName(name) {
    try {
      const mongoConnection = await makeMongoConnection();
      return await itemModel({ mongoConnection }).find({ name: { $regex: name, $options: 'i' }, deletedAt: null }).lean();
    } catch ({ message: ErrorMessage, name: ErrorName }) {
      throw new InternalServerError('Something went wrong.', 'InternalDatabaseError', { ErrorName, ErrorMessage });
    }
  }
  /**
   *
   * @param {*} name
   * @returns
   */
  async function updatedItemById({ itemId, ...dataToBeUpdated }) {
    try {
      const mongoConnection = await makeMongoConnection();
      return await itemModel({ mongoConnection })
        .updateOne({ _id: itemId }, { $set: { ...dataToBeUpdated } });
    } catch ({ message: ErrorMessage, name: ErrorName }) {
      throw new InternalServerError('Something went wrong.', 'InternalDatabaseError', { ErrorName, ErrorMessage });
    }
  }
  async function filterAllItems({
    sortBy,
    sortOrder,
    ...filterQuery
  }) {
    const sortObject = {};
    sortObject[sortOrder] = sortBy;
    try {
      const mongoConnection = await makeMongoConnection();
      return (await itemModel({ mongoConnection })
        .find({ ...filterQuery })
        .sort({ ...sortObject })
        .lean()).map(({
        _id: id, name, category, tags, createdAt, updatedAt, sizeInKq, quantity,
      }) => ({
        id, name, category, tags, sizeInKq, quantity, createdAt, updatedAt,
      }));
    } catch ({ message: ErrorMessage, name: ErrorName }) {
      throw new InternalServerError('Something went wrong.', 'InternalDatabaseError', { ErrorName, ErrorMessage });
    }
  }
  return Object.freeze({
    updatedItemById,
    insertItem,
    findItemById,
    findItemByName,
    filterAllItems,
  });
}
