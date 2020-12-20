const make404Error = (_, res) => res.send(JSON.stringify({
  code: 404,
  error: 'Not Found',
}));

module.exports = make404Error;
