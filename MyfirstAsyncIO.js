var fs = require('fs');
var path = process.argv[2];


fs.readFile(path, function callback (err, data){
  if(!err){
    var buf = data.toString().split('\n');
    console.log(buf.length - 1);
  }
});
