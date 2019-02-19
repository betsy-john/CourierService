var app=require("./app"),debug=require("debug")("courierservice:server"),http=require("http"),port=normalizePort(process.env.PORT||"8080");app.set("port",port);var server=http.createServer(app);function normalizePort(r){var e=parseInt(r,10);return isNaN(e)?r:e>=0&&e}function onError(r){if("listen"!==r.syscall)throw r;var e="string"==typeof port?"Pipe "+port:"Port "+port;switch(r.code){case"EACCES":console.error(e+" requires elevated privileges"),process.exit(1);break;case"EADDRINUSE":console.error(e+" is already in use"),process.exit(1);break;default:throw r}}function onListening(){var r=server.address(),e="string"==typeof r?"pipe "+r:"port "+r.port;debug("Listening on "+e)}server.listen(port),server.on("error",onError),server.on("listening",onListening);