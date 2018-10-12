console.log('Including sequelize connect to database.');

var Sequelize = require('sequelize');
//const sequelize = new Sequelize('database', 'username', 'password'
var sequelize = new Sequelize('d8uf8brg7j71no', 'acctyddcsxxwgq', '472a0b9f02f2b99a423e757b961e47728c81a6eabb0c1af5a182963dc873fd88', {
  dialect: "postgres", // or 'sqlite', 'postgres', 'mariadb'
  host: 'ec2-54-243-147-162.compute-1.amazonaws.com', // or 5432 (for postgres)
});
console.log('Sequelize is connected to heroku  database.');
sequelize
  .authenticate()
  .then(function (err) {
    console.log('Connection has been established successfully.');
  }, function (err) {
    console.log('Unable to connect to the database:', err);
  });