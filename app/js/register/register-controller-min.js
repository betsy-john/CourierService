angular.module("CourierServices").controller("registerController",function(e,r,s){var n=this;function o(){n.user={name:"",username:"",phonenumber:"",address:"",email:"",Password:""}}o(),n.registeredUser=(()=>{s.postRegister(n.user),n.reset(),r.go("login")}),n.reset=function(){o(),e.myForm.$setPristine()}});