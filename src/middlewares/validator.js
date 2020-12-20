const fetchRecordsValidator = require('../validation/records');

const validator = {
  validateRecord: async (req, res, next) => {
    fetchRecordsValidator
      .validateAsync(req.body)
      .then(() => {
        next();
      })
      .catch((e) => {
        res
          .json({
            code: 400,
            error: e.message,
          })
          .end();
      });
  },
};

module.exports = validator;
