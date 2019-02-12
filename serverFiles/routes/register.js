var express = require('express');
var router = express.Router();
const Sequelize = require('../databaseFiles/db_connection.js');

router.post('/post/newUser', function (req, res, next) {
  console.log('postthe register user',req)
  res.send('respond with a resource');

});
/* GET users listing. */
router.get('/newUser', function (req, res, next) {
  res.send('respond with a resource');

});

module.exports = router;
