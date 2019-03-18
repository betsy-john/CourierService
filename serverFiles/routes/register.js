var express = require('express');
var router = express.Router();
var register_controller = require('../controller/register-controller.js');

router.post('/post/newUser', register_controller.success_post_response);

module.exports = router;
