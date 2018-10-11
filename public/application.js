angular.module('CourierServices', ['ui.router', 'ui.bootstrap' , 'ngMaterial'])
angular.module('CourierServices').config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'donor-ask.html'
    })
})