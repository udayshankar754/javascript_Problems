/* ## 7. Count Occurrences of a Character in a String
- Write a function that counts the occurrences of a character in a string.

**Estimated Time:** 20 minutes

```javascript
function countOccurrences(str, char) {
    // Your code here
}
``` */

function countOccurrences(str, char) {
  let count = 0;
  for(let i = 0 ; i < str.length ; i++) {
    if(str[i] == char) {
      count++;
    }
  }
  return count;
}
// Test case for countOccurrences
console.assert(countOccurrences("hello world", "o") === 2, 'Test Case 1 Failed');
console.assert(countOccurrences("banana", "a") === 3, 'Test Case 2 Failed');
console.assert(countOccurrences("apple", "p") === 2, 'Test Case 3 Failed');
console.assert(countOccurrences("openai", "e") === 1, 'Test Case 4 Failed');
console.assert(countOccurrences("javascript", "j") === 1, 'Test Case 5 Failed');
console.assert(countOccurrences("abcd", "z") === 0, 'Test Case 6 Failed');
console.assert(countOccurrences("", "a") === 0, 'Test Case 7 Failed');

console.log('All test cases passed successfully!');
