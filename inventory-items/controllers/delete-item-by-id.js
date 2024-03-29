/**
 *
 * @param {*} param0
 * @returns
 */
export default function makeDeleteItemByIdController({
  moment,
  deleteItemById,
}) {
  return async function deleteItemByIdController(httpRequest) {
    await deleteItemById({
      ...httpRequest.params,
      ...httpRequest.body,
    });
    return {
      statusCode: 200,
      body: { meta: { status: 'success', timestamp: moment().toISOString() } },
    };
  };
}
