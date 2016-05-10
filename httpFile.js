var fs = require('fs');
var http = require('http');
var port = process.argv[2];
var local = process.argv[3];
var Dsaida;
var server = http.createServer( function (req, res){
  var stream = fs.createReadStream(local);
  stream.pipe(res);
});

server.listen(port);
