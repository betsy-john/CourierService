angular.module('CourierServices', ['ui.router', 'ngMaterial', 'ngAnimate', 'ngSanitize', 'ui.bootstrap', 'ngResource'])
angular.module('CourierServices').config(function ($stateProvider, $urlRouterProvider, $resourceProvider) {
   // Don't strip trailing slashes from calculated URLs
  $resourceProvider.defaults.stripTrailingSlashes = false;
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
    .state('profile', {
      url: '/profile',
      templateUrl: '/profile/profile.html',
      controller: 'profileController as vm'
    })
})