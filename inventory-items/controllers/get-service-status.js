/**
 *
 * @param {*} param0
 * @returns
 */
export default function makeGetServiceStatusController({
  moment,
}) {
  return function getServiceStatusController() {
    return {
      statusCode: 200,
      body: { meta: { status: 'success', timestamp: moment().toISOString() } },
    };
  };
}
