
(function () {
  'use strict';

  // Users service used for communicating with the users REST endpoint
  angular
    .module('CourierServices')
    .factory('registerService', registerService);

  registerService.$inject = ['$resource', '$log', '$http', '$q'];

  function registerService($resource, $log, $http, $q) {
    return $resource('/api/register/post/newUser', {}, {
      query: { method: "GET", isArray: false , transformResponse: function (data) {return {response: data}}},
      create: { method: "POST", isArray: false , transformResponse: function (data) {return {response: data}}},
      get: { method: "GET", isArray: false , transformResponse: function (data) {return {response: data}}},
      remove: { method: "DELETE", isArray: false , transformResponse: function (data) {return {response: data}}},
      update: { method: "PUT", isArray: false , transformResponse: function (data) {return {response: data}}}
  });
  }

}());