var fs = require('fs');
fs.readFile(process.argv[2], { encoding: 'utf8' }, function(err, contents) {
      if (err) { lcb(err); return; }
      // return contents.toString().split('\n');
      console.log(contents.toString().split('\n').length-1);
    });

