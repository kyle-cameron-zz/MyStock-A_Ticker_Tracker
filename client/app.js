angular.module('myApp', [])

  .controller('TickerController', ['$scope', '$interval', '$http', function($scope, $interval, $http){
    $scope.newTicker = '';
    // $scope.getDatetime = new Date()
    $scope.tickers = [];

    $scope.tickerSubmitter = function() {/*$interval(function() {*/
      // $interval(repeatFunction(), 2000);

      var newObj = {};
      newObj.short = $scope.newTicker.toUpperCase();
      var data = {newTicker: $scope.newTicker};

      $http.post('/api/tickerName', data)
      .then((response) => {
        newObj.name = response.data;
        return $http.post('/api/tickerPrice', data);
      })
      .then((response) => {
        newObj.price = response.data;
        newObj.time = new Date().toString('yyyy-MM-dd');
        $scope.tickers.push(newObj);
        return $scope.tickers.forEach((e) => {
          $interval( () => {
            var data = {newTicker: e['short']};
            return $http.post('/api/tickerName', data)
            .then( response => {
              e['name'] = response.data;
              return $http.post('/api/tickerPrice', data);
            })
            .then( response => {
              e['price'] = response.data;
              e['time'] = new Date().toString('yyyy-MM-dd');
            });
          }, 2000)
        })
      });


    }




  }]);

  // $interval(fn, delay, [count], [invokeApply], [Pass]);
