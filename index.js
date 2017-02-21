var express = require('express');
var app = express();

if (process.env.NODE_ENV == 'dev') {
  require('./webpackdev.server')(app)
}

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
})

app.listen(8080);