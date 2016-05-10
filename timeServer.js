var fs = require('fs');
var net = require('net');
var port = process.argv[2];
var Dsaida;
var server = net.createServer( function (socket){
  var date = new Date();
  Dsaida = date.getFullYear() + "-" + poeZero(date.getMonth()+1) +"-" + poeZero(date.getDate()) + " " + poeZero(date.getHours()) + ":" + poeZero(date.getMinutes())+'\n';
  console.log(Dsaida);
  socket.write(Dsaida);

  socket.end();
});

server.listen(port);

function poeZero(i){
  if(i<10){
    return "0"+i;
  }
  return i;
}
