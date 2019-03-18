angular.module('CourierServices').controller('registerController', function ($scope, $state, registerService) {

  var self = this;
  function user() {
    self.user = { name: '', userName: '', phoneNumber: '', address: '', email: '', password: '' };
  }
  user();
  self.registeredUser = () => {
    registerService.create(self.user);
    self.reset();
    $state.go('login');
  };

  self.reset = function () {
    user();
    $scope.myForm.$setPristine(); //reset Form
  };

})