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

    // filter results with date interval and sum count in the array
    const records = await this.recordDbInteractor.fetchAllRecords([
      { $match: { createdAt: { $gte: new Date(startDate), $lte: new Date(endDate) } } },
      { $addFields: { totalCount: { $sum: '$counts' } } },
    ]);

    /*
    * If record does not exists,
    * return empty array
    */
    if (!records.length) {
      return makeHttpSuccess({
        statusCode: 0,
        successMessage: 'success',
        successData: records,
      });
    }

    const passedRecords = [];
    // loop to retrieve records that is between min and max
    for (let index = 0; index < records.length; index++) {
      const element = records[index];
      const { totalCount } = element;
      if (totalCount > minCount && totalCount < maxCount) {
        passedRecords.push({
          key: element.key || element._doc.key,
          createdAt: element.createdAt || element._doc.createdAt,
          totalCount: element.totalCount || element._doc.totalCount,
        });
      }
    }

    return makeHttpSuccess({
      statusCode: 0,
      successMessage: 'success',
      successData: passedRecords,
    });
  }
}

module.exports = RecordRequestHandler;
