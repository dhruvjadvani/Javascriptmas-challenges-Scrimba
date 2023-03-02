/* toTitleCase
Write a function that will capitalize every word in a sentence.  

Example Input: "everything, everywhere, all at once"
Example Output: "Everything, Everywhere, All At Once"
*/

/* 
First, write a function that takes in one word and 
capitalizes the first letter of that word.

Example Input: "scrimba"
Example Output: "Scrimba"

Hint: Trying using slice() and .toUpperCase()
*/

function capitalizeWord(word){
    const newStr = word.charAt(0).toUpperCase() + word.slice(1);
    return newStr;
}

console.log(capitalizeWord("dhruv"));

/* 
Now write a function that capitalizes every word in a sentence. 
How can you reuse the function you just wrote? 
*/ 

function toTitleCase(str){
    const newArr = str.split(" ");
    const resArr = newArr.map(val => capitalizeWord(val));
    
    // console.log(newArr);
    // console.log(resArr);
    
    const finalStr = resArr.join(" ");
    return finalStr;
}

// Test your functions
console.log(capitalizeWord("pumpkin"));
console.log(toTitleCase("pumpkin pranced purposefully across the pond"));
