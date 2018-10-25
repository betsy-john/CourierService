angular.module('CourierServices').controller('registerController', function ($state) {
var vm = this;
vm.registerUser = {};
vm.registeredUser = (registeredUserDetails) => {
  console.log('registeruser', registeredUserDetails)
  $state.go('login')
}
vm.submitForm = function() {

  // check to make sure the form is completely valid
  if (vm.userForm.$valid) {
    alert('our form is amazing');
  }

};


})