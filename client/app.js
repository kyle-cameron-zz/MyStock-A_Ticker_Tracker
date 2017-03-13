angular.module('myApp', [])

  .controller('TickerController', ['$scope', '$interval', '$http', function($scope, $interval, $http){
    $scope.newTicker = '';
    // $scope.style={}
    $scope.tickers = [];

    $scope.tickerSubmitter = function() {
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
        newObj.style = {color: 'black'};
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
              if(response.data > e['price']) {
                e['style'] = {color: 'darkgreen'}
              }
              else if(response.data < e['price']) {
                e['style'] = {color: 'red'}
              }
              else if(response.data = e['price']) {
                e['style'] = {color: 'black'}
              }
              e['price'] = response.data;
              e['time'] = new Date().toString('yyyy-MM-dd');
            });
          }, 500)
        })
      });
    }
  }]);

  // $interval(fn, delay, [count], [invokeApply], [Pass]);
