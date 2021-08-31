const fs = require('fs')

process.on('exit', function(){
    console.log('Process Ended')
});



process.on('uncaughtException', (err) => { 

    // here the 1 is a file descriptor for STDERR 
  
    fs.writeSync(fs.openSync('test.log', 'w+'), `Caught exception: ${err}\n`) 
  
    process.exit(1) 
  
  }); 

  throw new Error('Exception Occured')