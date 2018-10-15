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
      templateUrl: '/login/login.html',
      controller: 'loginController as vm'
    })
    .state('register', {
      url: '/register',
      templateUrl: '/register/register.html',
      controller: 'registerController as vm'
    })
    .state('dashboard', {
      url: '/dashboard',
      templateUrl: '/dashboard/dashboard.html',
      controller: 'dashboardController as vm'
    })
})