let path = require('path');
let db = require(path.resolve('./db/models/index.js'));

exports.success_post_response = function (req, res) {
  const userData = db.User.build(req.body);
  userData.save();
  res.send(userData);
};