class user {
  constructor(username, email, age) {
    this.username = username;
    this.email = email;
    this.age = age;
  }

  getRegister() {
    console.log('hello and welcome' + this.username);
  }
  static message() {
    console.log('welcome')
  }
}

let reg = new user('betsy', 'B@Gmail.com', 22);
reg.message();
reg.getRegister();