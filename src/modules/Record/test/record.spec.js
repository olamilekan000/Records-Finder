/* eslint-disable */ 

const { expect } = require('chai');
const RecordRequestHandler = require('../record.request-handler');
const recordServices = require('../record.services');
const MockRecordModel = require('./model.mock');

const recordDbInteractor = recordServices({ RecordModel: MockRecordModel });
const recordRequestHandler = new RecordRequestHandler({
  recordDbInteractor,
});

const mockRecord = {
  startDate: '2016-01-26',
  endDate: '2016-01-28',
  minCount: 200,
  maxCount: 5000,
};

const badMockRecord = {
  startDate: '',
  endDate: '',
  minCount: '',
  maxCount: '',
};

describe('Handle Fetch Records Request', () => {
  it('responds to fetching records request', (done) => {
    recordRequestHandler
      .getAllRecords({ body: mockRecord })
      .then((data) => {
        const dataJson = JSON.parse(data.data);
        expect(data.code).to.equal(200);
        expect(dataJson.message).to.equal('success');
        expect(dataJson.records[0].key).to.equal('URgTRjZE');
        expect(dataJson.records[0].createdAt).to.equal('2016-01-27T20:11:08.114Z');
        expect(dataJson.records[0].totalCount).to.equal(4700);
        expect(dataJson.records[0].key).to.not.be.null;
        expect(dataJson.records[0].createdAt).to.not.be.null;
        expect(dataJson.records[0].totalCount).to.not.be.null;
      });
    done();
  });

  it('responds to request that has a missing value in the payload', (done) => {
    recordRequestHandler
      .getAllRecords({ body: badMockRecord })
      .then((data) => {
        const dataJson = JSON.parse(data.data);
        expect(data.headers['Content-Type']).to.equal('application/json');
        expect(data.statusCode).to.equal(400);
        expect(dataJson.error).to.equal(
          'Kindly enter a start all required fields',
        );
      });
    done();
  });
});
