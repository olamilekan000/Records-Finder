const makeHttpSuccess = ({ statusCode, successMessage, successData = {} }) => ({
  headers: {
    'Content-Type': 'application/json',
  },
  data: JSON.stringify({
    code: statusCode,
    message: successMessage,
    records: successData,
  }),
});

module.exports = makeHttpSuccess;
