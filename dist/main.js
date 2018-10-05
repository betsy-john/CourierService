'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var user = function () {
  function user(username, email, age) {
    _classCallCheck(this, user);

    this.username = username;
    this.email = email;
    this.age = age;
  }

  _createClass(user, [{
    key: 'getRegister',
    value: function getRegister() {
      console.log('hello and welcome' + this.username);
    }
  }], [{
    key: 'message',
    value: function message() {
      console.log('welcome');
    }
  }]);

  return user;
}();

var reg = new user('betsy', 'B@Gmail.com', 22);
reg.message();
reg.getRegister();