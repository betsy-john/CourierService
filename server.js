var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var index = require('./serverFiles/index.js');

//To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }))

//To parse json data
app.use(bodyParser.json())

// app.use('/index', index);
//time logger 
//Middleware function to log request protocol
app.use('/index', function(req, res, next){
   console.log("A request for things received at " + Date.now());
   next();
})
app.get('/index', function (req, res) {
  res.send('Hello from Express')
})
 
app.listen(8080)