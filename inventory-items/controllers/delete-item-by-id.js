/**
 *
 * @param {*} param0
 * @returns
 */
export default function makeDeleteInventoryItem({
  moment,
  deleteItemById,
}) {
  return async function deleteInventoryItem(httpRequest) {
    await deleteItemById({
      ...httpRequest.params,
    });
    return {
      statusCode: 200,
      body: { meta: { status: 'success', timestamp: moment().toISOString() } },
    };
  };
}
