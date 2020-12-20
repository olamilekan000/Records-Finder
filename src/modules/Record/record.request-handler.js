const makeHttpSuccess = require('../../helpers/http-success');
const makeHttpError = require('../../helpers/http-error');

class RecordRequestHandler {
  constructor({ recordDbInteractor }) {
    this.recordDbInteractor = recordDbInteractor;
  }

  async getAllRecords(httpRequest) {
    // destructure request body
    const {
      body: {
        startDate, endDate, minCount, maxCount,
      },
    } = httpRequest;

    if (!startDate || !endDate) {
      return makeHttpError({
        statusCode: 400,
        errorMessage: 'Kindly enter a start all required fields',
      });
    }

    /**
     * Filter date with start date and end date, add a count field,
     * remove the fields that are not needed and return data based on the
     * minCount, maxCount, and totalCount and then sort in an ascending order.
     */
    const records = await this.recordDbInteractor.fetchAllRecords([
      { $match: { createdAt: { $gte: new Date(startDate), $lte: new Date(endDate) } } },
      { $addFields: { totalCount: { $sum: '$counts' } } },
      { $unset: ['counts', '_id', 'value'] },
      { $match: { totalCount: { $gt: minCount, $lt: maxCount } } },
      { $sort : { totalCount : 1 } }
    ]);

    return makeHttpSuccess({
      statusCode: 0,
      successMessage: 'success',
      successData: records,
    });
  }
}

module.exports = RecordRequestHandler;
