// var fs = require('fs')
// var path = require('path')

//delete the file if exists
// fs.unlink('write.txt', function(err, result){
//     if(err)console.log("Opration Failed")
// })

//create a dir
// fs.mkdirSync('Dir');
//remove dir
// fs.rmdirSync('Dir');

// fs.mkdir('stuff', function(){
//     fs.readFile('data.txt', 'utf8', function(err, data){
//         fs.writeFile('./stuff/writeMe.txt', data, function(err, result){
//             if(err) console.log('error', err);
//         });
//     });
// })


// fs.rmdirSync('stuff');

// fs.unlink('./stuff/writeMe.txt', function(){
//     fs.rmdir('stuff', function(err, result){
//         if(err) console.log('error', err);
//     });    
// });




// const directory = 'test';

// fs.readdir(directory, (err, files) => {
//   if (err) throw err;

//   console.log("No of Files:"+files.length);
//   console.log(path.join(directory, files[0]))

//   for (const file of files) {
//     fs.unlink(path.join(directory, file), err => {
//       if (err) throw err;
//     });
//   }
// });



const fs = require('fs').promises;

const directory = 'test';

fs.rmdir(directory, { recursive: true })
  .then(() => console.log('directory removed!'));
