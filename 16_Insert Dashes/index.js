function insertDashes(arr) {
    // write code here
    let newArr = arr.split(" ");
    
    const resArr = newArr.map(val => val.split("").join("-"));
    
    const resStr = resArr.join(" ");
    
    return resStr;
}


console.log(insertDashes("aba aba"));
/**
* Test Suite 
*/
describe('insertDashes()', () => {
    it('insert dashes in between chars', () => {
        // arrange
        const value = "aba caba";
        
        // act
        const result = insertDashes(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe("a-b-a c-a-b-a");
    });
});
