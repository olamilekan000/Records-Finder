/* eslint-disable */ 

const records = [
  {
    counts: [
      236,
      533,
      898,
      1070,
      843,
      1120,
    ],
    _id: '5ee2162fe07f053f990cf671',
    key: 'URgTRjZE',
    value: 'TqhUTAxKCEXo',
    createdAt: '2016-01-27T20:11:08.114Z',
  },
  {
    counts: [
      236,
      533,
      898,
      1070,
      843,
      1120,
    ],
    _id: '5ee21696e07f053f990cfa61',
    key: 'URgTRjZE',
    value: 'TqhUTAxKCEXo',
    createdAt: '2016-01-27T20:11:08.114Z',
  },
  {
    counts: [
      86,
      43,
    ],
    _id: '5ee215d5e07f053f990cf09c',
    key: 'tNLnQsEZ',
    value: 'EBZBflljwfOk',
    createdAt: '2016-01-26T05:49:49.728Z',
  },
];

class MockRecordModel {
  constructor() {}

  static find() {
    return Promise.resolve(records);
  }
}

module.exports = MockRecordModel;
