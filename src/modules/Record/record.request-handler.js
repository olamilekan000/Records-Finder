const makeHttpSuccess = require('../../helpers/http-success');
const makeHttpError = require('../../helpers/http-error');

class RecordRequestHandler {
  constructor({ recordDbInteractor }) {
    this.recordDbInteractor = recordDbInteractor;
  }

  async getAllRecords(httpRequest) {
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

    const records = await this.recordDbInteractor.fetchAllRecords({
      createdAt: { $gte: new Date(startDate), $lte: new Date(endDate) },
    });

    if (!records.length) {
      return makeHttpSuccess({
        statusCode: 200,
        successMessage: 'success',
        successData: records,
      });
    }

    const passedRecords = [];

    for (let index = 0; index < records.length; index++) {
      const element = records[index];
      const { counts } = element;
      const totalCount = counts.reduce((a, b) => a + b, 0);

      if (totalCount > minCount && totalCount < maxCount) {
        const newRecordObject = {
          key: element.key || element._doc.key,
          createdAt: element.createdAt || element._doc.createdAt,
          totalCount,
        };

        passedRecords.push(newRecordObject);
      }
    }

    return makeHttpSuccess({
      statusCode: 200,
      successMessage: 'success',
      successData: passedRecords,
    });
  }
}

module.exports = RecordRequestHandler;
