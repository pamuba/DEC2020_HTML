const mathOperations = require('./calculator');

describe("Calculator tests", () => {
    test('adding 1 + 2 should return 3', () => {
      expect(mathOperations.sum(1, 2)).toBe(3);
    });
    test("subtracting 2 from 10 should return 8", () => {
        // arrange and act
        var result = mathOperations.diff(10,2)
      
        // assert
        expect(result).toBe(8);
      });
      
      xtest("multiplying 2 and 8 should return 16", () => {
        // arrange and act
        var result = mathOperations.product(2,8)
      
        // assert
        expect(result).toBe(16);
      });
      test("truthy operators", () => {
        var name="Software testing help"
        var n = null
        expect(n).toBeNull()
        expect(name).not.toBeNull
      
        // name has a valid value
        expect(name).toBeTruthy()
      
        //fail - as null is non success
        expect(n).toBeTruthy()
        
        // pass - null treated as false or negative
        expect(n).toBeFalsy()
      
        // 0 - treated as false
        expect(0).toBeFalsy()
      });
      test("numeric operators", () => {
 
        var num1 = 100;
        var num2 = -20;
        var num3 = 0;
      
        // greater than
        expect(num1).toBeGreaterThan(10)
      
        // less than or equal
        expect(num2).toBeLessThanOrEqual(0)
      
        // greater than or equal
        expect(num3).toBeGreaterThanOrEqual(0)
      });
      test("string matchers",() => {
        var string1 = "software testing help - a great resource for testers"
      
        // test for success match
        expect(string1).toMatch(/test/);
      
        // test for failure match
        expect(string1).not.toMatch(/abc/)
      });
      describe("Calculator tests", () => {
       var input1 = 0
       var input2 = 0
       
       beforeAll(() => {
         console.log("beforeAll called");
       });
       
       afterAll(() => {
         console.log("afterAll called");
       });
        beforeEach(() => {
         console.log("beforeEach called");
         input1 = 1;
         input2 = 2;
       });
        afterEach(() => {
         console.log("afterEach called");
       });
       
       test('adding 1 + 2 should return 3', () => {
         // arrange and act
         var result = mathOperations.sum(input1,input2)
       
         // assert
         expect(result).toBe(3);
       });
      })
})