/* 
## 8. Palindrome Check
- Write a function that checks if a string is a palindrome.

**Estimated Time:** 20 minutes

```javascript
function isPalindrome(str) {
    // Your code here
}
``` */


function isPalindrome(str) {
  let newString = [...str].reverse().join('')
  if(str == newString) 
    return true
  return false
 
}


function isPalindrome2(str) {
  for(let i = 0 ; i < Math.floor(str.length / 2) ; i++) {
    if(str[i] != str[str.length - 1 - i])
    return false;
  }
  return true; 
}

// Test case for isPalindrome
console.assert(isPalindrome("madam") === true, 'Test Case 1 Failed');
console.assert(isPalindrome("racecar") === true, 'Test Case 2 Failed');
console.assert(isPalindrome("hello") === false, 'Test Case 3 Failed');
console.assert(isPalindrome("level") === true, 'Test Case 4 Failed');
console.assert(isPalindrome("world") === false, 'Test Case 5 Failed');
console.assert(isPalindrome("") === true, 'Test Case 6 Failed'); // empty string is considered a palindrome

// Test case for isPalindrome2
console.assert(isPalindrome2("madam") === true, 'Test Case 7 Failed');
console.assert(isPalindrome2("racecar") === true, 'Test Case 8 Failed');
console.assert(isPalindrome2("hello") === false, 'Test Case 9 Failed');
console.assert(isPalindrome2("level") === true, 'Test Case 10 Failed');
console.assert(isPalindrome2("world") === false, 'Test Case 11 Failed');
console.assert(isPalindrome2("") === true, 'Test Case 12 Failed'); // empty string is considered a palindrome

console.log('All test cases passed successfully!');
