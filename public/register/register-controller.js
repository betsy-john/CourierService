angular.module('CourierServices').controller('registerController', function ($state, registerService) {
  var vm = this;
  vm.registerUser = {};
  vm.registeredUser = (registeredUserDetails) => {
    registerService.getRegister();
    $state.go('login')
  }
  vm.submitForm = function () {
    // check to make sure the form is completely valid
    if (vm.userForm.$valid) {
      alert('our form is amazing');
    }

  };


})