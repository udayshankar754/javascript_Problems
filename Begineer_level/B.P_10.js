/* 
## 10. Reverse an Array
- Write a function that reverses an array without using the built-in reverse() method.

**Estimated Time:** 20 minutes

```javascript
function reverseArray(arr) {
    // Your code here
}
``` */
function reverseArray(arr) {
  let newArray = [];
  for(let i = 0 ; i < arr.length ; i++) {
      newArray.push(arr[arr.length - 1 - i])
  }
  return newArray
}


// Test cases for reverseArray
console.assert(JSON.stringify(reverseArray([1, 2, 3, 4, 5])) === JSON.stringify([5, 4, 3, 2, 1]), 'Test Case 1 Failed');
console.assert(JSON.stringify(reverseArray([10, 20, 30])) === JSON.stringify([30, 20, 10]), 'Test Case 2 Failed');
console.assert(JSON.stringify(reverseArray([0, -1, -2])) === JSON.stringify([-2, -1, 0]), 'Test Case 3 Failed');
console.assert(JSON.stringify(reverseArray([1])) === JSON.stringify([1]), 'Test Case 4 Failed'); // Single element array
console.assert(JSON.stringify(reverseArray([])) === JSON.stringify([]), 'Test Case 5 Failed'); // Empty array
console.assert(JSON.stringify(reverseArray([1, 2, 'hello', 4])) === JSON.stringify([4, 'hello', 2, 1]), 'Test Case 6 Failed');

console.log('All test cases passed successfully!');
