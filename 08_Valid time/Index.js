function validTime(str) {
    //  write code here.
    let newStr = str.split(":");
    
    let [hours, mins] = newStr;
    
    hours = Number(hours);
    mins = Number(mins);
    
    // console.log(hours);
    // console.log(mins);
    
    if(hours > 24 || mins > 60) {
        return false;
    } else {
        return true;
    }
    console.log(newStr);
}


console.log(validTime("10:54"));
/**
* Test Suite 
*/
describe('validTime()', () => {
    it('returns true for valid time', () => {
        // arrange
        const str = '13:58';
        
        // act
        const result = validTime(str);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(true);
    });

    it('returns false when invalid hours', () => {
        // arrange
        const str = '25:51';
        
        // act
        const result = validTime(str);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(false);
    });

    it('returns false when invalid minutes', () => {
        // arrange
        const str = '02:76';
        
        // act
        const result = validTime(str);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(false);
    });
});
