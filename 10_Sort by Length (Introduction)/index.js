function sortByLength(strs) {
    //  write code here.
    
    let arr = [...strs];
    
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            let pointer1 = i;
            let pointer2 = j;
            
            
            if(arr[pointer1].length > arr[pointer2].length) {
                let temp = arr[pointer1];
                arr[pointer1] = arr[pointer2];
                arr[pointer2] = temp;
                
            }
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
