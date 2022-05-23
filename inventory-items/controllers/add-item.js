/**
 *
 * @param {*} param0
 * @returns
 */
export default function makeAddItemController({
  moment,
  addItem,
}) {
  return async function addItemController(httpRequest) {
    await addItem({
      ...httpRequest.body,
    });
    return {
      statusCode: 200,
      body: { meta: { status: 'success', timestamp: moment().toISOString() } },
    };
  };
}
