var fs = require('fs');
var path = process.argv[2];
var qse = process.argv[3];
var ext = '.' + qse;

fs.readdir(path, function comext(err , data){
    var caminhando = require('path');
    for ( var i in data){
      if (caminhando.extname(data[i]) == ext){
        console.log(data[i]);

      }
    }

});
