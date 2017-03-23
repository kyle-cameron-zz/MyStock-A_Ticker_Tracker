angular.module('MyStock', [
  'MyStock.Auth.Service',
  'MyStock.Auth.Controller',
  // 'MyStock.Goals.Service',
  // 'MyStock.Detail.Controller',
  // 'MyStock.GoalForm.Controller',
  // 'MyStock.Goals.Controller',
  'ngRoute'
])
  .config(function ($routeProvider, $httpProvider, $locationProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainController',
        authenticate: true
      })
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchController',
        authenticate: true
      })
      .when('/signin', {
        templateUrl: 'views/login.html',
        controller: 'AuthController'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'AuthController'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutController'
      })
      .otherwise({
        redirectTo: '/main'
      });
    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('AttachTokens');
  })
  .controller('TickerController', ['$scope', '$interval', '$http', function($scope, $interval, $http){
    $scope.newTicker = '';
    $scope.tickers = [];

    $scope.tickerSubmitter = function() {
      const newObj = {};
      newObj.short = $scope.newTicker.toUpperCase();
      const data = {newTicker: $scope.newTicker};
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
            const data = {newTicker: e['short']};
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
