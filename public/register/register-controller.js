angular.module('CourierServices').controller('registerController', function ($scope, $state, registerService) {

  var self = this;
  function user() {
    self.user = { name: '', username: '', phonenumber: '', address: '', email: '', Password: '' };
  }
  user();
  self.registeredUser = () => {
    registerService.create(self.user, function (data) {
      // do something which you want with response
      console.log("data====> ", data.response)
    })
    self.reset();
    $state.go('login');
  };

  self.reset = function () {
    user();
    $scope.myForm.$setPristine(); //reset Form
  };

})