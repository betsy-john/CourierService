// var express = require('express')
// var multer = require('multer');
// var upload = multer();
// var app = express();
// var dotenv = require('dotenv').config()
// var bodyParser = require('body-parser');
// var cookieParser = require('cookie-parser');
// var index = require('./serverFiles/index.js');
// const path = require('path')
// const Sequelize = require(path.resolve('./serverFiles/databaseFiles/db_connection.js'));
// var apps = require('./app');
// const port = 8080;
// // for parsing multipart/form-data
// app.use(upload.array());
// //adding statis  files
// app.use(express.static('public'));

// //adding image files
// app.use(express.static('images'));
// //To parse URL encoded data
// app.use(bodyParser.urlencoded({ extended: false }))

// //To parse json data
// app.use(bodyParser.json())

// app.use(cookieParser())
// app.set('view engine', 'pug');
// app.set('views','./serverFiles/views');


// app.listen(port, (err) => {
//   if (err) {
//     return console.log('something bad happened', err)
//   }
//   console.log(`server is listening on ${port}`)
// })

/**
 * Module dependencies.
 */

var app = require('./app');
var debug = require('debug')('courierservice:server');
var http = require('http');

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '8080');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
