//* Test async i/o
//  var fs = require('fs');
// fs.readFile(process.argv[2], { encoding: 'utf8' }, function(err, contents) {
//       if (err) { lcb(err); return; }
//       // return contents.toString().split('\n');
//       console.log(contents.toString().split('\n').length-1);
//     });

//* Test filter ls
var fs = require('fs');
var path = require('path');
fs.readdir(process.argv[2], function(err, files) {
  if (err) { return finish(err); }
  if (files.length === 0) { finish(); }
  //for each file if the extension name is txt then console.log the file name.
  var fileType = '.' + process.argv[3].split();
  files.forEach(function(file) {
      if (path.extname(file) === fileType) {
      console.log (file);
    }
  });
});


//* Test http client
// var http = require('http');
// http.get(process.argv[2], function(res) {
//   res.setEncoding('utf8');
//   res.on("data", function (data) {
//     console.log(data);
//   });
// }).on('error', function(e) {
//   console.log("Got error: " + e.message);
// });

