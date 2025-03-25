/* ## 1. Reverse a String
- Write a function that reverses a string without using the built-in reverse() method.

**Estimated Time:** 15 minutes

```javascript
function reverseString(str) {
    // Your code here
}
``` */


function reverseString(str) {
  let reverseStr = ''
  str = str.split('')

  for(i = 1 ; i <= str.length; i++) {
    reverseStr += str[str.length - i]
  }
  return reverseStr
}

console.assert(reverseString('uday kumar purbey') === 'yebrup ramuk yadu', 'Test Case 1 Failed');
console.assert(reverseString('hello') === 'olleh', 'Test Case 2 Failed');
console.assert(reverseString('12345') === '54321', 'Test Case 3 Failed');
console.assert(reverseString('') === '', 'Test Case 4 Failed');
console.assert(reverseString('!@#') === '#@!', 'Test Case 5 Failed');
console.assert(reverseString('abc def ghi') === 'ihg fed cba', 'Test Case 6 Failed');

console.log('All test cases passed successfully!');
