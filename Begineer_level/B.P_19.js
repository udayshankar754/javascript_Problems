/* ## 19. Count Vowels in a String
- Write a function that counts the number of vowels in a string.

**Estimated Time:** 20 minutes

```javascript
function countVowels(str) {
    // Your code here
}
``` */

function countVowels(str) {
  let count = 0;
  str.split('').forEach(i => {if(i.toLowerCase() == 'a' || i.toLowerCase() == 'e' || i.toLowerCase() == 'i' || i.toLowerCase() == 'o' || i.toLowerCase() == 'u') count++})
  return count
}


function countVowels2(str) {
  const vowels = new Set('aeiou'); 
  let count = 0;
  str.toLowerCase().split('').forEach(char => {
    if (vowels.has(char)) count++;
  });
  return count;
}


// Test cases
console.assert(countVowels('hello world') === 3, 'Test Case 1 Failed'); // 3 vowels: e, o, o
console.assert(countVowels2('hello world') === 3, 'Test Case 2 Failed'); // 3 vowels: e, o, o

console.assert(countVowels('aeiou') === 5, 'Test Case 3 Failed'); // 5 vowels: a, e, i, o, u
console.assert(countVowels2('aeiou') === 5, 'Test Case 4 Failed'); // 5 vowels: a, e, i, o, u

console.assert(countVowels('HELLO') === 2, 'Test Case 5 Failed'); // 2 vowels: E, O (case-insensitive)
console.assert(countVowels2('HELLO') === 2, 'Test Case 6 Failed'); // 2 vowels: E, O (case-insensitive)

console.assert(countVowels('bcdfg') === 0, 'Test Case 7 Failed'); // No vowels
console.assert(countVowels2('bcdfg') === 0, 'Test Case 8 Failed'); // No vowels

console.assert(countVowels('abcdefghijklmnopqrstuvwxyz') === 5, 'Test Case 9 Failed'); // 5 vowels: a, e, i, o, u
console.assert(countVowels2('abcdefghijklmnopqrstuvwxyz') === 5, 'Test Case 10 Failed'); // 5 vowels: a, e, i, o, u

console.assert(countVowels('A quick brown fox jumps over the lazy dog') === 11, 'Test Case 11 Failed'); // 11 vowels
console.assert(countVowels2('A quick brown fox jumps over the lazy dog') === 11, 'Test Case 12 Failed'); // 11 vowels

console.log('All test cases passed successfully!');