angular.module('CourierServices').controller('loginController', function () {
  var vm = this;
  vm.login = {};
  vm.submitLoginform = (loginDetails) => {
    console.log('loginDet', loginDetails)
  }
})