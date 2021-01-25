//test suite - collection of related test
//they can be nested

describe("calculator.js", function(){
    it('should add numbers to total', function(){
        const calculator = new Calculator();
        calculator.add(5);
        //assertion
        expect(calculator.total).toBe(5); //===
    });
    it('should subtract numbers to total', function(){

    });
    it('should divide numbers to total', function(){

    });
    it('should multiply numbers to total', function(){

    });
    it('has constructor', function(){
        const calculator = new Calculator();
        const calculator2 = new Calculator();
       
        // calculator2.total = 10;
        // calculator.total = 10;
        // expect(calculator).toEqual(calculator2);

        expect(calculator).toBeTruthy();
        expect(calculator2).not.toBeFalsy();
    });
    it('test add to be defined', function(){
        const calculator = new Calculator();

        // expect(calculator.add).toBeDefined();
        // expect(calculator.sum).toBeUndefined();
        // expect(calculator.sum).not.toBeDefined();

        calculator.total = null;
        expect(calculator.total).toBeNull();
    })

    it('test for isNaN', function(){
        const calculator = new Calculator();
        calculator.total = 20;
        calculator.multiply('a')
        
        expect(calculator.total).toBeNaN();

        expect(calculator.constructor.name).toContain('Calc');
    })

    it('handles divide by zero', function(){
        const calculator = new Calculator();
       expect(function(){calculator.divide(0)}).toThrow();
       expect(function(){calculator.divide(0)}).toThrowError(Error);
       expect(function(){calculator.divide(0)}).toThrowError(Error, 'Cannot divide by zero');
    });
    it('return a value', function(){
       const calculator = new Calculator();
       calculator.total = -50;
    //    expect(calculator.add(20)).toBe(70);

       expect(calculator.add(-20)).toBe(-70); // -/+ d

       expect(calculator.total).toMatch(/-?\d+/);
    })


})