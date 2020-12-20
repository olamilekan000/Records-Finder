const make404Error = require('../../helpers/404');
const validator = require('../../middlewares/validator');
const recordControllers = require('../../modules/Record/record.controller');

const recordRoutes = (Router) => {
  const router = Router();

  router.route('/').post(validator.validateRecord, recordControllers.fetchAllRecords);
  router.route('*', make404Error);

  return router;
};

module.exports = recordRoutes;
