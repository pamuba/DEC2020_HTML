const assert = require('assert')

describe('file to be tested', ()=>{
    //Multiple Context
    context('function to be tested', ()=>{
        before(()=>{
            console.log("======before")
        })
        after(()=>{
            console.log("======after")
        })
        beforeEach(()=>{
            console.log("======beforeEach")
        })
        afterEach(()=>{
            console.log("======afterEach")
        })
        it('it should do something',()=>{
            assert.equal(2,2)
        });
        it('do something else', ()=>{
            assert.deepEqual({name:'foo'},{name:'foo'})
        });
        it('to test the connection');
    })
})
