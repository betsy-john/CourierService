angular.module('CourierServices', ['ui.router', 'ngMaterial', 'ngAnimate', 'ngSanitize', 'ui.bootstrap'])
angular.module('CourierServices').config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('login', {
      url: '/',
      templateUrl: '/login/login.html'
    })
})