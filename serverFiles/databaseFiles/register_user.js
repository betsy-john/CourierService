var Sequelize = require('sequelize');
const Op = Sequelize.Op;
var sequelize = new Sequelize('Couriers', 'postgres', 'postgres', {
  dialect: "postgres", // or 'sqlite', 'postgres', 'mariadb'
  host: '127.0.0.1', // or 5432 (for postgres)
  operatorsAliases: {
    $and: Op.and,
    $or: Op.or,
    $eq: Op.eq,
    $gt: Op.gt,
    $lt: Op.lt,
    $lte: Op.lte,
    $like: Op.like
  }
});
console.log('Sequelize is connected to database(register_user).');
sequelize
  .authenticate()
  .then(function (err) {
    console.log('Connection has been established successfully.');
  }, function (err) {
    console.log('Unable to connect to the database:', err);
  });
