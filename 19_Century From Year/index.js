function centuryFromYear(num) {
    //  write code here.
    const year = num;
    
    const century = year % 100 === 0 ? year / 100 : Math.floor(year / 100) + 1;
    
    return century;
}



/**
* Test Suite 
*/
describe('centuryFromYear()', () => {
    it('returns current century', () => {
        // arrange
        const year = 1905;
        
        // act
        const result = centuryFromYear(year);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(20);
    });
    
    it('returns current century for edge case of start of century', () => {
        // arrange
        const year = 1700;
        
        // act
        const result = centuryFromYear(year);

        // log
        console.log("result 2: ", result);
        
        // assert
        expect(result).toBe(17);
    });    
});


console.log(centuryFromYear(2023));
