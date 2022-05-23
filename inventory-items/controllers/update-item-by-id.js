/**
 *
 * @param {*} param0
 * @returns
 */
export default function makeUpdateItemByIdController({
  moment,
  updateItemById,
}) {
  return async function updateItemByIdController(httpRequest) {
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
