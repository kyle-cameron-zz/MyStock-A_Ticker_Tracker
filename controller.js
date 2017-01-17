var request = require('request');
var rp = require('request-promise');

module.exports =  {

  tickerName: function(req, res) {
    rp.get("http://finance.yahoo.com/d/quotes.csv?s=" + req.body.newTicker + "&f=n")
    .then(function(response){ res.send(response); });
  },
  tickerPrice: function(req, res) {
    rp.get("http://finance.yahoo.com/d/quotes.csv?s=" + req.body.newTicker + "&f=a")
    .then(function(response){ res.send(response); });
  }

};
