var port = 1337;

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./config/config');
var mongoose = require('./config/mongoose');
var express = require('./config/express');
var passport = require('./config/passport');

var db = mongoose();
var app = express();
var passport = passport();

var server = app.listen(config.port);

var io = require('./config/socket.io')(server);

module.exports = app;
console.log(process.env.NODE_ENV  + ' server running at http://localhost:' + config.port);