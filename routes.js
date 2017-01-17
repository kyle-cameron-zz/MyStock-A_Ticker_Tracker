var controller = require('./controller.js');
module.exports = function (app, express) {
  app.post('/api/tickerName', controller.tickerName);
  app.post('/api/tickerPrice', controller.tickerPrice);
};
