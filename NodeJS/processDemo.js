// process.on('exit', code => {
// 	setTimeout(() => {
// 		console.log('Will not get displayed');
// 	}, 0);

// 	console.log('Exited with status code:', code);
// });
// console.log('Execution Completed');




// process.stdout.write('Hello World!' + '\n');

// process.argv.forEach(function(val, index, array) {
// 	console.log(index + ': ' + val);
// });



/**
* Reading a file
*/
var fs = require('fs'), args;

args = process.argv.splice(2);

console.log(args)

args.forEach(function(arg){
 //async read
 fs.readFile(arg, 'utf8', function(err, data) {
 if (err) console.log(err);
 console.log(data);
 });
 //synchronicity
 var file = fs.readFileSync(arg, 'utf8');
 console.log(file);
 //with a readable stream
 var readstrm = fs.createReadStream(arg, {flag: 'r', encoding: 'utf8'});
 readstrm.on('data', function(d) {
 console.log(d);
 });
});