
/* ## 13. Find the Length of a String Without Using .length
- Write a function to find the length of a string without using the built-in .length property.

**Estimated Time:** 15 minutes

```javascript
function stringLength(str) {
    // Your code here
}
```
 */
function stringLength(str) {
    let count = 0;
    for(let s in str) count++;
    return count;
}


// Test cases
console.assert(stringLength('hello') === 5, 'Test Case 1 Failed');        // length of 'hello' is 5
console.assert(stringLength('world') === 5, 'Test Case 2 Failed');        // length of 'world' is 5
console.assert(stringLength('') === 0, 'Test Case 3 Failed');             // empty string has length 0
console.assert(stringLength('a') === 1, 'Test Case 4 Failed');            // single character string has length 1
console.assert(stringLength('test') === 4, 'Test Case 5 Failed');         // length of 'test' is 4
console.assert(stringLength('string') === 6, 'Test Case 6 Failed');       // length of 'string' is 6
console.assert(stringLength('longerstring') === 12, 'Test Case 7 Failed'); // length of 'longerstring' is 12

console.log('All test cases passed successfully!');