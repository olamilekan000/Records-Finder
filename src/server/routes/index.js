const make404Error = require('../../helpers/404');
const recordRoutes = require('./record');

const apiRouter = (Router) => {
  const router = Router();

  router.use('/counts', recordRoutes(Router));
  router.use('*', make404Error);

  return router;
};

module.exports = apiRouter;
