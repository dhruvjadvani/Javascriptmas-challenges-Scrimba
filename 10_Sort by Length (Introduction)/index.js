function sortByLength(strs) {
    //  write code here.
    let arr = [...strs];
    let pointerOne = 0;
    let pointerTwo = 1;
  
    for(let i = 0; i < arr.length; i++) {
            
        if(pointerTwo >= arr.length) {
            break;
        }
        
        if(arr[pointerOne].length > arr[pointerTwo].length) {
            let temp = arr[pointerOne];
            arr[pointerOne] = arr[pointerTwo];
            arr[pointerTwo] = temp;
            pointerOne++;
            pointerTwo++;
        } else {
            pointerTwo++;
        }
        
    }
    
    return arr;
}


console.log(sortByLength(["abc", "", "aaa", "a", "zz"]));



/**
* Test Suite 
*/
describe('sortByLength()', () => {
    it('sorts the strings from shortest to longest', () => {
        // arrange
        const strs = ["abc", "", "aaa", "a", "zz"];
        
        // act
        const result = sortByLength(strs);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual(["", "a", "zz", "abc", "aaa"]);
    });
});
