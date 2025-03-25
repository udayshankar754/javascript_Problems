/* 
## 15. Remove Whitespace from a String
- Write a function that removes all whitespace from a string.

**Estimated Time:** 15 minutes

```javascript
function removeWhitespace(str) {
    // Your code here
}
``` */

function removeWhitespace(str) {
    return str.replace(/\s/g, '');
}


function removeWhitespace2(str) {
  return str.replace(' ', '');
}

function removeWhitespace3(str) {
  return str.split(' ').join('')
}


// Test cases
console.assert(removeWhitespace('Hello World') === 'HelloWorld', 'Test Case 1 Failed'); // remove all whitespaces
console.assert(removeWhitespace('   space   ') === 'space', 'Test Case 2 Failed');       // leading and trailing spaces
console.assert(removeWhitespace('text\n\t') === 'text', 'Test Case 3 Failed');           // remove tabs and newlines
console.assert(removeWhitespace('  multiple   spaces  ') === 'multiplespaces', 'Test Case 4 Failed'); // multiple spaces in the middle

console.assert(removeWhitespace2('Hello World') === 'HelloWorld', 'Test Case 5 Failed'); // removes only the first space
console.assert(removeWhitespace2('   space   ') === '  space   ', 'Test Case 6 Failed');  // doesn't remove leading/trailing spaces or multiple spaces
console.assert(removeWhitespace2('text\n\t') === 'text\n\t', 'Test Case 7 Failed');      // doesn't remove tabs or newlines

console.assert(removeWhitespace3('Hello World') === 'HelloWorld', 'Test Case 8 Failed'); // removes only spaces
console.assert(removeWhitespace3('   space   ') === 'space', 'Test Case 9 Failed');      // removes spaces at the beginning and end
console.assert(removeWhitespace3('text\n\t') === 'text\n\t', 'Test Case 10 Failed');     // doesn't remove tabs or newlines

console.log('All test cases passed successfully!');
