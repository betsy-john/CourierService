
(function () {
  'use strict';

  // Users service used for communicating with the users REST endpoint
  angular
    .module('CourierServices')
    .factory('registerService', registerService);

  registerService.$inject = ['$resource', '$log', '$http', '$q'];

  function registerService($resource, $log, $http, $q) {
    let registerService = {};
    registerService.postRegister = function (postData) {
      console.log('data', postData)
      var deferred = $q.defer();
      $http({
        method: 'POST',
        url: '/api/register/post/newUser',
        data: postData
      }).then(function (response) {
        deferred.resolve(response);
      }, deferred.reject);
      return deferred.promise;
    }
    registerService.getRegister = function () {
      var deferred = $q.defer();
      $http({
        method: 'GET',
        url: '/api/register/newUser',
      }).then(function (response) {
        deferred.resolve(response);
      }, deferred.reject);
      return deferred.promise;
    }
    // return $resource('/api/register');
    return registerService
  }
}());