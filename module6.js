module.exports = {

    comext: function (path, ext, data){
      var caminhando = require('path');
      for ( var i in data){
        if (caminhando.extname(data[i]) == ext){
          console.log(data[i]);

        }
      }

  }

}
