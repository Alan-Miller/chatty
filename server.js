var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var messages = ['pumpkin', 'sushi', 'gelatto'];

var app = express();

app.use(cors());
app.use(bodyParser());

app.get('/', function(req, res) {
  res.json(messages);
});

app.post('/', function(req, res) {
  messages.push(req.body.message);
  console.log(req.body);
});

app.listen(8000, function() {
  console.log('Listening on port 8000');
});
