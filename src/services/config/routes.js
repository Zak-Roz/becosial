const { HttpError } = require('../../helpers/HttpError');
const apiRoutes = require('../../routes');

module.exports.setRoutes = (app) => {
  app.get('/', (req, res) => {
    res.send('Welcome to the APP');
  });
  app.use('/api', apiRoutes);
  app.use('/*', (req, res) => {
    const error = new Error('Requested path does not exist.');
    error.statusCode = 404;
    res.status(error.statusCode).json(new HttpError(error));
  });
};
