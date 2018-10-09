var express = require('express')
var multer = require('multer');
var upload = multer();
var app = express()
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var index = require('./serverFiles/index.js');
const path = require('path')
const Sequelize = require(path.resolve('./serverFiles/databaseFiles/db_connection.js'));
// for parsing multipart/form-data
app.use(upload.array());
//adding statis  files
app.use(express.static('public'));

//adding image files
app.use(express.static('images'));
//To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }))

//To parse json data
app.use(bodyParser.json())

app.use(cookieParser())
app.set('view engine', 'pug');
app.set('views','./serverFiles/views');

app.get('/first_template', function(req, res){
   res.render('first_view');
});
 
app.listen(8080)