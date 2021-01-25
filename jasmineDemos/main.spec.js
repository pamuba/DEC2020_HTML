describe('main.js', () => {
    it('validates expresions', function(){
        spyOn(window, 'updateResult').and.stub();
        calculate('a+3');
        expect(window.updateResult).toHaveBeenCalled();
        expect(window.updateResult).toHaveBeenCalledWith('Expression not recognized');
        expect(window.updateResult).toHaveBeenCalledTimes(1);
    });

    it('call real function', function(){
        spyOn(window, 'updateResult').and.stub();
        spyOn(Calculator.prototype, 'multiply').and.callThrough();
        calculate('5*5');
        expect(window.updateResult).toHaveBeenCalled();
        expect(window.updateResult).toHaveBeenCalledWith(25);
        expect(window.updateResult).toHaveBeenCalledTimes(1);
    });
    it('call real function', function(){
        spyOn(window, 'updateResult').and.stub();
        spyOn(Calculator.prototype, 'multiply').and.callFake(function(){
            return 100;
        });
        calculate('5*5');
        expect(window.updateResult).toHaveBeenCalled();
        expect(window.updateResult).toHaveBeenCalledWith(100);
        expect(window.updateResult).toHaveBeenCalledTimes(1);
    })
    it('test return values', function(){
        spyOn(window, 'updateResult').and.stub();
        spyOn(Calculator.prototype, 'multiply').and.returnValue('fake values');
        calculate('5*5');
        expect(window.updateResult).toHaveBeenCalled();
        expect(window.updateResult).toHaveBeenCalledWith('fake values');
        expect(window.updateResult).toHaveBeenCalledTimes(1);
    });
    it('test Errors', function(){
        spyOn(Calculator.prototype, 'multiply').and.throwError('some error');
       
        expect(function(){calculate('5*5')}).toThrowError('some error');
    })
});
