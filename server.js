var express = require('express')
var app = express()
var index = require('./serverFiles/index.js');

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