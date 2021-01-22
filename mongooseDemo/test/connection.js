const mongoose = require("mongoose");

//replaces the Promise from js
mongoose.Promise = global.Promise;

//connect to db before running tests
before(function (done) {
  //Connect to mongodb
  mongoose.connect("mongodb://localhost/mongoosedb");

  mongoose.connection
    .once("open", function () {
      console.log("Connection has been made");
      done();
    })
    .on("error", function (error) {
      console.log("Connect error:" + error);
    });
});

//Drop the characters collection before each test
beforeEach(function(done){
    //Drop the collection Async
    mongoose.connection.collections.mariochars.drop(function(){
        done();
    });
})
