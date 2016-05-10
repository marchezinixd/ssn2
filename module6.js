var fs = require('fs');
var ret = [];

module.exports = function (path, ext, callback){
    fs.readdir(path, function (err, files){
        var path = require('path');

        for(var file of files){
          if(path.extname(file) == ext){
              ret.push(file);
          }
        }
        callback(ret);
    });
};
