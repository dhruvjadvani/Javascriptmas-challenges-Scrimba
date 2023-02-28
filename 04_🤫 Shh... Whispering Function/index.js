/* Whispering function 
Write a function `whisper` that takes in a sentence 
and returns a new sentence in all lowercase letters with
"shh..." at the beginning. 

The function should also remove an exclamation point
at the end of the sentence, if there is one. 

Example 
input: "The KITTENS are SLEEPING!"
output: "shh... the kittens are sleeping"

Hint: endsWith and slice
*/

function whisper(str) {
  let newStr = "shh... " + str.toLowerCase();

  if (newStr[newStr.length - 1] === "!") {
    let str = "";
    for (let i = 0; i < newStr.length - 1; i++) {
      str = str + newStr[i];
    }

    return str;
  } else {
    return newStr;
  }
}

console.log(whisper("PLEASE STOP SHOUTING."));
console.log(whisper("MA'AM, this is a Wendy's!"));

