const record = require('.');
const adaptRequest = require('../../helpers/adapt-request');

const recordControllers = {
  fetchAllRecords: (req, res) => {
    const httpRequest = adaptRequest(req);

    record
      .getAllRecords(httpRequest)
      .then(({ headers, data }) => {
        res.set(headers).status(200).send(data);
      })
      .catch((e) => res
        .status(500)
        .json({
          error: e.message || 'Internal server error',
        })
        .end());
  },
};

module.exports = recordControllers;
