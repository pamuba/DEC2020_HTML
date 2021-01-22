// const mocha = require('mocha')
// const assert = require('assert')
// const MarioChar = require('../models/mariochar')

// //test suite
// describe('Finding Records', function(){
//     var char;
//     beforeEach(function(done){
//         char = new MarioChar({
//             name:'Mario'
//         });

//         char.save().then(function(){
//             assert(char.isNew === false)
//             done();
//         })
//     });
//     it('Find one record from the database', function(done){
//         MarioChar.findOne({name:"Mario"}).then(function(result){
//             assert(result.name === "Mario");
//             done();
//         })
//     });
//     it('Find one record from the database by id', function(done){
//         MarioChar.findOne({_id:char._id}).then(function(result){
//             assert(result._id.toString() === char._id.toString());
//             done();
//         })
//     })
// })