const makeHttpError = ({ statusCode, errorMessage }) => ({
  headers: {
    'Content-Type': 'application/json',
  },
  statusCode,
  data: JSON.stringify({
    code: statusCode,
    error: errorMessage,
  }),
});

module.exports = makeHttpError;
