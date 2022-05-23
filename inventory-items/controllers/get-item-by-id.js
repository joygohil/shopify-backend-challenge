/**
 *
 * @param {*} param0
 * @returns
 */
export default function makeGetItemByIdController({
  moment,
  getItemById,
}) {
  return async function getItemByIdController(httpRequest) {
    const response = await getItemById({
      ...httpRequest.params,
    });
    return {
      statusCode: 200,
      body: { meta: { status: 'success', timestamp: moment().toISOString() }, ...response },
    };
  };
}
