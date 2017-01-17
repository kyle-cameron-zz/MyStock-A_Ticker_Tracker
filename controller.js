var Q = require('q');
var request = require('request')

module.exports = {
  tickerName: function(req, res, next) {
    console.log(req.body)
    request.get("http://finance.yahoo.com/d/quotes.csv?s=" + $scope.search + "&f=n")
    .then(function(response){ $scope.tickerName = response.data; });
  },

  tickerPrice: function(req, res, next) {
    request.get("http://finance.yahoo.com/d/quotes.csv?s=" + $scope.search + "&f=a")
    .then(function(response){ $scope.tickerPrice = response.data; });
    console.log(req.body)
  }
}



// request({
//   method: 'GET',
//   url: 'http://finance.yahoo.com/d/quotes.csv',
//   qs: {s: 'AAPL', f: 'a' },
//   headers: {}
//   }, function(error, response, body) {
//   if(error) throw new Error(error);
//   console.log(body);
// });
//
// request({
//   method: 'GET',
//   url: 'http://finance.yahoo.com/d/quotes.csv',
//   qs: {s: 'AAPL', f: 'n' },
//   headers: {}
//   }, function(error, response, body) {
//   if(error) throw new Error(error);
//   console.log(body);
// });



// function fetch(){
//
// }
