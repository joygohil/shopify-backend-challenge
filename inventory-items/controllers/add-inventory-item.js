/**
 *
 * @param {*} param0
 * @returns
 */
export default function makeAddInventoryItem({
  moment,
  addItem,
}) {
  return async function addInventoryItem(httpRequest) {
    await addItem({
      ...httpRequest.body,
    });
    return {
      statusCode: 200,
      body: { meta: { status: 'success', timestamp: moment().toISOString() } },
    };
  };
}
