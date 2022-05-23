/**
 *
 * @param {*} param0
 * @returns
 */
export default function makeUndoDeletedItemByIdController({
  moment,
  undoDeletedItemById,
}) {
  return async function undoDeletedItemByIdController(httpRequest) {
    await undoDeletedItemById({
      ...httpRequest.params,
    });
    return {
      statusCode: 200,
      body: { meta: { status: 'success', timestamp: moment().toISOString() } },
    };
  };
}
