angular.module('CourierServices', ['ui.router', 'ngMaterial', 'ngAnimate', 'ngSanitize', 'ui.bootstrap'])
angular.module('CourierServices').config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/welcome/welcome.html',
    })
    .state('login', {
      url: '/login',
      templateUrl: '/welcome/welcome.html',
    })
    .state('register', {
      url: '/register',
      templateUrl: '/welcome/welcome.html',
    })
})