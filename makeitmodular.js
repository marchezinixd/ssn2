var path = process.argv[2];
var extention = '.' + process.argv[3];

var modulo = require('./module6.js');
modulo(path, extention, function(arquivos){
  for(i=0;i<arquivos.length;i++){
    	console.log(arquivos[i]);
  }
});
