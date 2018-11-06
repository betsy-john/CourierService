var express = require('express');
var router = express.Router();

router.get('/', (request, response) => {
  response.send('Hello from Express!')
})
/* GET users listing. */
router.get('/newUser', function (req, res, next) {
  res.send('respond with a resource');

});

module.exports = router;
