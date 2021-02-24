const chai = require('chai')
const expect = chai.expect;

describe('chai test', () => {
    it('should compare', ()=>{
        expect(1).to.equal(1)
    });
    it('do something else', ()=>{
        expect({name:'foo'}).to.deep.equal({name:'foo'})
        expect({name:'foo'}).to.have.property('name').equal('foo')
        expect(5>10).to.be.false
        expect({}).to.be.a('object')
        expect("hello").to.be.a('string')
        expect(3).to.be.a('number')
        expect("hello").to.be.a('string').with.lengthOf(5)
        expect("hello".length).to.equal(5)
        expect(null).to.be.null
        expect(undefined).to.not.exist
        expect(1).to.exist
        console.log(process.env.NODE_ENV)
    });
});
