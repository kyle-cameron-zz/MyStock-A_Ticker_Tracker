// app.js
// several things needs to happen here.
// create the angular module
  // create the angular controller
    // in the controller create a function that sends a post..
    // ...request with the ticker to the server
    // then listens for a response.
    // then take the response and separate it into two $scope...
    // ... variables - companyName & stock price

'use strict';

angular.module('myApp', [])
  .controller('tickerGetter', function($scope, $http){
    $scope.$watch('search', function() {
      fetch();
    });

    $scope.search = "AAPL";
    $scope.tickerName = '';
    $scope.tickerPrice = '';

    function fetch(){
      $http.post("/api/tickerName", someParam)
      .then(function(response){ $scope.tickerName = response.data; });

      $http.post("/api/tickerPrice", someParam)
      .then(function(response){ $scope.tickerPrice = response.data; });
    }

 // // some code below
 //    $scope.update = function(movie){
 //      $scope.search = movie.Title;
 //    };
 //
 //    $scope.select = function(){
 //      this.setSelectionRange(0, this.value.length);
 //    }
  });

  // request({
  //   method: 'GET',
  //   url: 'http://finance.yahoo.com/d/quotes.csv',
  //   qs: {s: 'AAPL', f: 'na' },
  //   headers: {}
  //   }, function(error, response, body) {
  //   if(error) throw new Error(error);
  //   console.log(body);
  // });
