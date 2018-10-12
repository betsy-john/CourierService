console.log('Including sequelize connect to database.');

var Sequelize = require('sequelize');
var sequelize = new Sequelize('Couriers', 'postgres', 'postgres', {
  dialect: "postgres", // or 'sqlite', 'postgres', 'mariadb'
  host: '127.0.0.1', // or 5432 (for postgres)
});
console.log('Sequelize is connected to database.');
sequelize
  .authenticate()
  .then(function (err) {
    console.log('Connection has been established successfully.');
  }, function (err) {
    console.log('Unable to connect to the database:', err);
  });