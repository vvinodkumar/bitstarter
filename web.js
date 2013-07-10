var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

var htmlData = '';
fs.readFileSync('index.html', 'utf8',function (err, data) {
  if (err) { console.log(err); }
  console.log(data);
});

response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

