var express = require('express');
var request = require('request')
var app = express();

app.use(express.static('client'))
// vv TBU refactor for the below, request of Sam. #itissafertouseabsolutepathname
// app.use('/static', express.static(path.join(__dirname, 'client')))

var port = process.env.PORT || 3000;

app.listen(port);

module.exports = app;

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
//   $http.get("http://finance.yahoo.com/d/quotes.csv?s=" + $scope.search + "&f=n")
//   .then(function(response){ $scope.tickerName = response.data; });
//
//   $http.get("http://finance.yahoo.com/d/quotes.csv?s=" + $scope.search + "&f=a")
//   .then(function(response){ $scope.tickerPrice = response.data; });
// }
