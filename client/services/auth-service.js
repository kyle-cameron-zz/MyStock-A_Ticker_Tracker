angular.module('MyStock.Auth.Service', [])
  .factory('Auth', function ($http, $location, $window) {
    const signout = function () {
      console.log('signing out!');
      return $window.localStorage.removeItem('com.gp');
    };

    var login = function (user) {
      return $http({
        method: 'POST',
        url: '/login',
        data: user
      })
        .then(function (resp) {
          return resp.data.token;
        });
    };

    const signup = function (user) {
      return $http({
        method: 'POST',
        url: '/signup',
        data: user
      })
        .then(function (resp) {
          return resp.data.token;
        });
    };

    const isAuth = function () {
      return !!$window.localStorage.getItem('com.ms');
    };


    return {
      login: login,
      signup: signup,
      isAuth: isAuth,
      signout: signout
    };
  });
