const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const ErrorHandler = require('../helpers/error-handler');
const apiRouter = require('./routes');

const server = () => {
  const app = express();

  app.disable('x-powered-by');
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(morgan('dev'));

  app.use('/api/v1', apiRouter(express.Router));

  app.get('/', (_, res) => {
    res.status(200).json({
      code: 200,
      message: 'hi there! kindly use the required base url',
    });
  });

  app.use(ErrorHandler);

  return app;
};

module.exports = server;
