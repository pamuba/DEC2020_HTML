// Node.js program to demonstrate the     
// fs.open() Method 
   
// Include the fs module 
// var fs = require('fs'); 
  
// console.log("Open file!"); 
  
// // To open file in write and read mode, 
// // create file if doesn't exists. 
// fs.open('demo.txt', 'w+', function (err, f) { 
//    if (err) { 
//       return console.error(err); 
//    } 
//    console.log(f); 
//    console.log("File opened!!");      
// }); 




var fs = require("fs");
var fileName = "notes.txt";

fs.access(fileName, fs.constants.R_OK ,function(err) {
  if (!err) {
    // get information about the file
    fs.stat(fileName, function(error, stats) {
      // open the file (getting a file descriptor to it)
      fs.open(fileName, "r", function(error, fd) {  //3
        var buffer = new Buffer.alloc(stats.size);

        // read its contents into buffer
        fs.read(fd, buffer, 0, buffer.length, null, function(error, bytesRead, buffer) {
          var data = buffer.toString("utf8", 0, buffer.length);

          console.log(data);
          fs.close(fd, err=>{if(err)console.log(err)});
        });
        // fs.appendFileSync(fd,"last line")
      });
    });
  }
  else
    console.log(err)
});







/**
* Moving files
*/
// var fs = require('fs'),
//  origPath,
//  newPath,
//  args = process.argv;
// if (args.length !== 4) {
//  throw new Error('Invalid Arguments');
// } else {
//  origPath = args[2];
//  newPath = args[3];
// }
// // move file asynchronously from tmp to save
// fs.rename(origPath, newPath, function(err) {
//  if (err) throw err;
// });