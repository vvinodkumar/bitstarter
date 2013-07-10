var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {


fs.readFileSync('index.html', 'utf8',function (err, data) {
 if (err) throw err;
  response.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
  response.write(data);
  response.end();
 });


});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

