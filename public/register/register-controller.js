angular.module('CourierServices').controller('registerController', function ($scope, $state, registerService) {
  
  var self = this;
  self.user = { name: '', username: '', address: '', email: '',Password: ''}; 

  self.registeredUser = () => {
    registerService.postRegister(self.user);
     self.reset();
    $state.go('login')
  }

  self.reset = function () {
    self.user = { name: '', username: '', address: '', email: '',Password: ''};
    $scope.myForm.$setPristine(); //reset Form
  }

})