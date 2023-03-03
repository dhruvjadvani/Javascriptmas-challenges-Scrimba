function countVowelConsonant(str) {
  // write code here
  let newStrArr = str.split("");
  let count = 0;
  for(let i = 0; i < newStrArr.length; i++) {
    //   console.log(newStrArr[i]);
      if(newStrArr[i] === "a") {
            count++;
      } else if(newStrArr[i] === "e") {
          count++;
      } else if(newStrArr[i] === "i") {
          count++;
      } else if(newStrArr[i] === "o") {
          count++;
      } else if(newStrArr[i] === "u") {
          count++;
      } else {
          count = count + 2;
      }
  }
  return count;
}



/**
* Test Suite 
*/
describe('countVowelConsonant()', () => {
    it('returns total of vowels(1) and consonants(2) to be added', () => {
        // arrange
        const value = 'abcde';
        
        // act
        const result = countVowelConsonant(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(8);
    });
});

console.log(countVowelConsonant("abcde"));
