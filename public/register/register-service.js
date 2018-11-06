
(function () {
  'use strict';

  // Users service used for communicating with the users REST endpoint
  angular
    .module('CourierServices')
    .factory('registerService', registerService);

  registerService.$inject = ['$resource', '$log', '$http'];

  function registerService($resource, $log, $http) {
    let registerService = {};

    registerService.getRegister = function () {
      $http.get('/api/register/newUser').then(function (res) {
        return res
      })
    }
    // return $resource('/api/register');
    return registerService
  }
}());