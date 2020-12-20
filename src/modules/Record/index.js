const RecordModel = require('../../db/models/record');
const RecordRequestHandler = require('./record.request-handler');
const countServices = require('./record.services');

const recordDbInteractor = countServices({ RecordModel });
const record = new RecordRequestHandler({ recordDbInteractor });

module.exports = record;
