const makeHttpSuccess = ({ statusCode, successMessage, successData = {} }) => ({
  headers: {
    'Content-Type': 'application/json',
  },
  data: JSON.stringify({
    code: statusCode,
    msg: successMessage,
    records: successData,
  }),
});

module.exports = makeHttpSuccess;
