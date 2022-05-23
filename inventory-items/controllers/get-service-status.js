/**
 *
 * @param {*} param0
 * @returns
 */
export default function makeGetServiceStatus({
  moment,
}) {
  return function getServiceStatus() {
    return {
      statusCode: 200,
      body: { meta: { status: 'success', timestamp: moment().toISOString() } },
    };
  };
}
