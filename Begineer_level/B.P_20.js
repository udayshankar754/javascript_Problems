/* ## 20. Find the Index of the First Occurrence of a Character
- Write a function that finds the index of the first occurrence of a character in a string.

**Estimated Time:** 20 minutes

```javascript
function indexOfFirstOccurrence(str, char) {
    // Your code here
}
``` */


function indexOfFirstOccurrence(str, char) {
  if (str == '') return 'Empty String'
  if(char == '') return ''
  console.log(str.split('').indexOf(char));
  return str.split('').indexOf(char) + 1;
}


console.assert(indexOfFirstOccurrence('hello', 'e') === 2, 'Test Case 1 Failed'); // 'e' first occurs at position 2 (1-based index)
console.assert(indexOfFirstOccurrence('hello', 'l') === 3, 'Test Case 2 Failed'); // 'l' first occurs at position 3 (1-based index)
console.assert(indexOfFirstOccurrence('hello', 'o') === 5, 'Test Case 3 Failed'); // 'o' first occurs at position 5 (1-based index)
console.assert(indexOfFirstOccurrence('hello', 'z') === 0, 'Test Case 4 Failed'); // 'z' does not exist, so returns 0 (1-based index)
console.assert(indexOfFirstOccurrence('hello', '') === 1, 'Test Case 5 Failed'); // Empty string, returns 1 (1-based index)

console.log('All test cases passed successfully!');

console.log(indexOfFirstOccurrence('hello' , ''));
