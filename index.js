var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/about', function (req, res) {
  res.send('about');
});


app.get('/random.text', function (req, res) {
  res.send('random.text');
});

app.listen(80, function () {
  console.log('Example app listening on port 80!');
});