angular.module('myApp', [])

  .controller('TickerController', ['$scope', '$http', function($scope, $http){
    $scope.newTicker = '';
    $scope.tickers = [];

    $scope.tickerSubmitter = function() {
      var newObj = {};
      newObj.short = $scope.newTicker.toUpperCase();
      var data = {newTicker: $scope.newTicker};

      $http.post('/api/tickerName', data)
      .then(function(response){
        newObj.name = response.data;
        return $http.post('/api/tickerPrice', data);
      })
      .then(function(response){
        newObj.price = response.data;
        $scope.tickers.push(newObj)
      });
    };
  }]);
