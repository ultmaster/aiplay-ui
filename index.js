var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.static('src'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});