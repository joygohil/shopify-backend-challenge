/**
 *
 * @param {*} param0
 * @returns
 */
export default function makeListItemController({
  moment,
  listItem,
}) {
  return async function listItemController(httpRequest) {
    const response = await listItem({
      ...httpRequest.query,
    });
    return {
      statusCode: 200,
      body: { meta: { status: 'success', timestamp: moment().toISOString(), itemCount: response.length }, data: response },
    };
  };
}
