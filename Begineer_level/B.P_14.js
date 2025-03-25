/* ## 14. Merge Two Arrays
- Write a function that merges two arrays into one.

**Estimated Time:** 20 minutes

```javascript
function mergeArrays(arr1, arr2) {
    // Your code here
}
``` */

function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

function mergeArrays2(arr1, arr2) {
  return arr1.concat(arr2);
}


// Test cases
console.assert(JSON.stringify(mergeArrays([1, 2], [3, 4])) === JSON.stringify([1, 2, 3, 4]), 'Test Case 1 Failed'); // merging two arrays
console.assert(JSON.stringify(mergeArrays([], [1, 2, 3])) === JSON.stringify([1, 2, 3]), 'Test Case 2 Failed'); // merging with an empty array
console.assert(JSON.stringify(mergeArrays([1, 2], [])) === JSON.stringify([1, 2]), 'Test Case 3 Failed'); // merging with an empty array
console.assert(JSON.stringify(mergeArrays([5, 6], [7, 8, 9])) === JSON.stringify([5, 6, 7, 8, 9]), 'Test Case 4 Failed'); // merging different arrays
console.assert(JSON.stringify(mergeArrays([1], [1])) === JSON.stringify([1, 1]), 'Test Case 5 Failed'); // merging identical arrays
console.assert(JSON.stringify(mergeArrays([], [])) === JSON.stringify([]), 'Test Case 6 Failed'); // merging two empty arrays

console.assert(JSON.stringify(mergeArrays2([1, 2], [3, 4])) === JSON.stringify([1, 2, 3, 4]), 'Test Case 7 Failed'); // merging two arrays with mergeArrays2
console.assert(JSON.stringify(mergeArrays2([], [1, 2, 3])) === JSON.stringify([1, 2, 3]), 'Test Case 8 Failed'); // merging with an empty array using mergeArrays2
console.assert(JSON.stringify(mergeArrays2([1, 2], [])) === JSON.stringify([1, 2]), 'Test Case 9 Failed'); // merging with an empty array using mergeArrays2
console.assert(JSON.stringify(mergeArrays2([5, 6], [7, 8, 9])) === JSON.stringify([5, 6, 7, 8, 9]), 'Test Case 10 Failed'); // merging different arrays using mergeArrays2
console.assert(JSON.stringify(mergeArrays2([1], [1])) === JSON.stringify([1, 1]), 'Test Case 11 Failed'); // merging identical arrays using mergeArrays2
console.assert(JSON.stringify(mergeArrays2([], [])) === JSON.stringify([]), 'Test Case 12 Failed'); // merging two empty arrays using mergeArrays2

console.log('All test cases passed successfully!');
