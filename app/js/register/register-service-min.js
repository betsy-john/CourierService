!function(){"use strict";function e(e,r,t,n){let o={postRegister:function(e){console.log("data",e);var r=n.defer();return t({method:"POST",url:"/api/register/post/newUser",data:e}).then(function(e){r.resolve(e)},r.reject),r.promise},getRegister:function(){var e=n.defer();return t({method:"GET",url:"/api/register/newUser"}).then(function(r){e.resolve(r)},e.reject),e.promise}};return o}angular.module("CourierServices").factory("registerService",e),e.$inject=["$resource","$log","$http","$q"]}();