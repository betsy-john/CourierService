var express = require('express')
var app = express()
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var index = require('./serverFiles/index.js');

//adding statis  files
app.use(express.static('public'));
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