(function (angular) {
  'use strict';
  function printDirective() {
    function link(scope, element, attrs) {
      element.on('click', function () {
        var alertType = (attrs.alertElementId)
        if (alertType) {
          scope.alert_type = alertType;
        };
      });
    };
    return {
      link: link,
      templateUrl :'/directives/alert/alert-directive.html',
      restrict: 'A'
    };
  };
  angular.module('cardinalManagementSystemApp').directive('ngAlert', [printDirective]);
}(window.angular));