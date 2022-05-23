/**
 *
 * @param {*} param0
 * @returns
 */
export default function makeUpdateItemByIdItem({
  moment,
  updateItemById,
}) {
  return async function updateItemByIdItem(httpRequest) {
    await updateItemById({
      ...httpRequest.params,
      ...httpRequest.body,
    });
    return {
      statusCode: 200,
      body: { meta: { status: 'success', timestamp: moment().toISOString() } },
    };
  };
}
