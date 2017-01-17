var Q = require('q');
var request = require('request')

module.exports = {
  tickerName: function(req, res, next) {
    console.log(req.body)
  // $http.get("http://finance.yahoo.com/d/quotes.csv?s=" + $scope.search + "&f=n")
  // .then(function(response){ $scope.tickerName = response.data; });
  },

  tickerPrice: function(req, res, next) {
//   $http.get("http://finance.yahoo.com/d/quotes.csv?s=" + $scope.search + "&f=a")
//   .then(function(response){ $scope.tickerPrice = response.data; });
    console.log(req.body)
  }
}



request({
  method: 'GET',
  url: 'http://finance.yahoo.com/d/quotes.csv',
  qs: {s: 'AAPL', f: 'na' },
  headers: {}
  }, function(error, response, body) {
  if(error) throw new Error(error);
  console.log(body);
});




// function fetch(){
//
// }
