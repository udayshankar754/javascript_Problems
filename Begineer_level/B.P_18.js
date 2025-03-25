/* ## 18. Check if a String Contains a Substring
- Write a function that checks if a string contains a substring.

**Estimated Time:** 15 minutes

```javascript
function containsSubstring(str, substring) {
    // Your code here
}
``` */


function containsSubstring(str, substring) {
  return str.includes(substring);
}


// Test cases
console.assert(containsSubstring('hello world', 'world') === true, 'Test Case 1 Failed'); // 'world' is in 'hello world'
console.assert(containsSubstring('JavaScript is awesome', 'Java') === true, 'Test Case 2 Failed'); // 'Java' is in the string
console.assert(containsSubstring('I love programming', 'programming') === true, 'Test Case 3 Failed'); // 'programming' is in the string
console.assert(containsSubstring('hello', 'Hello') === false, 'Test Case 4 Failed'); // case-sensitive, 'Hello' is not the same as 'hello'
console.assert(containsSubstring('hello', 'ell') === true, 'Test Case 5 Failed'); // 'ell' is in 'hello'
console.assert(containsSubstring('abcdef', 'xyz') === false, 'Test Case 6 Failed'); // 'xyz' is not in 'abcdef'
console.assert(containsSubstring('hello world', '') === true, 'Test Case 7 Failed'); // empty substring is always found

console.log('All test cases passed successfully!');
