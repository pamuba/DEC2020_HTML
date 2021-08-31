// const express = require('express')
// const app = express()
// const { logger } = require("./logger")

// var myLogger = function(error, req, res, next){
//     console.log("Middleware running.....")
//     res.json({message:error.message})
//     next()
// }

// app.use(myLogger)

// app.get("/", (req, res)=>{
//     res.send('Hello World')
//     logger.warn("Warning from '/'");
// })



// app.listen(5000, ()=>{
//     logger.info('Express Server is running on localhost:5000')
//     logger.error("Something went wrong")
//     logger.info('Express Server is running on localhost:5000')
// })

const { logger } = require('./logger');
const express = require('express')
const app = express();
const port = 3000;
const host = "localhost";

// Dummy Express GET call
app.get('/',(req,res) => {
    res.send("Hello World!");
    logger.info("Server Sent A Hello World!");
})

// Introduce error by using undefined variable 'y'
app.get('/calc',(req,res) => {
    const x = y + 10;
    res.send(x.toString());
})

// Capture 500 errors
app.use((err,req,res,next) => {
res.status(500).send('Could not perform the calculation!');
   logger.error(`${err.status || 500} - ${res.statusMessage} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
})

// Capture 404 erors
app.use((req,res,next) => {
    res.status(404).send("PAGE NOT FOUND");
    logger.error(`400 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
})
// Run the server
app.listen(port, () => {
    console.log("Server started...");
    logger.info(`Server started and running on http://${host}:${port}`)
})