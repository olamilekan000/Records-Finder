const environmentConfig = () => {
  let envConfig = {};

  switch (process.env.NODE_ENV) {
    case 'production':
      envConfig = {
        mongoBD: process.env.MONGODB_URL_DEV,
        port: process.env.PORT,
      };
      break;

    default:
      envConfig = {
        mongoBD: process.env.MONGODB_URL_DEV,
        port: process.env.PORT,
      };
      break;
  }

  return envConfig;
};

module.exports = environmentConfig;
