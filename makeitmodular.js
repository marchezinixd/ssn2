var fs = require('fs');
var path = process.argv[2];
var qse = process.argv[3];
var ext = '.' + qse;

var modular =  require('./module6.js');

modular.comext(path, ext);
