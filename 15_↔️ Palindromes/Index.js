/* 
Palindromes are words that are the same forward or backward. For example, 
the words "noon" and "kayak" are a palindromes.
 
Write a function to check if a lowercased string of letters is a palindrome. 
If the word is palidrome, return true. If it isn't, return false. 
*/

function reverse(str) {
    let newStr = ""
    for(let i = str.length - 1; i >= 0; i++) {
        newStr = newStr + str.charAt(i);
    }
    
    return newStr;
}

function isPalindrome(str){
    const newStr = reverse(str);
    
    if(newStr === str) {
        return true;
    } else {
        return false;
    }
}

// Test your function
console.log(isPalindrome("abba"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("octopus"));
console.log(isPalindrome("pumpkins"));
console.log(isPalindrome("madam"));

