var fs = require('fs');
var path = process.argv[2];
var buf = fs.readFileSync(path).toString().split('\n');
console.log(buf.length - 1);
