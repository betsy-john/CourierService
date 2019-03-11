var express = require('express');
var router = express.Router();
const sequel = require('../databaseFiles/register_user.js');

router.post('/post/newUser', function (req, res) {
  console.log("res")
  res.send('correct');

  // res.json({res: 'respond with a resource'});
  // sequel

});
/* GET users listing. */
router.get('/newUser', function (req, res, next) {
  res.send('respond with a resource');

});

module.exports = router;
