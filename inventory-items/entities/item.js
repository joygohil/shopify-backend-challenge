export default function buildMakeItem({ moment }) {
  return async function makeItem({
    id,
    name,
    category,
    quantity,
    sizeInKg,
    tags,
    deletionComment,
    createdAt,
    updatedAt,
    deletedAt,

  }) {
    return Object.freeze({
      getId: () => id,
      getName: () => name,
      getCategory: () => category,
      getSizeInKg: () => sizeInKg,
      getQuantity: () => quantity,
      getTags: () => tags,
      getCreatedAtDate: () => createdAt || moment().toISOString(),
      getUpdatedAtDate: () => updatedAt || moment().toISOString(),
      getDeletedAtDate: () => deletedAt || moment().toISOString(),
      getDeletionComment: () => deletionComment,
    });
  };
}
