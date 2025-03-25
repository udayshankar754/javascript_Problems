/* 
## 9. Remove Duplicates from an Array
- Write a function that removes duplicates from an array.

**Estimated Time:** 20 minutes

```javascript
function removeDuplicates(arr) {
    // Your code here
}
```
 */

function removeDuplicates(arr) {
  let newArray = new Set(arr)
  return [...newArray];
}


function removeDuplicates2(arr) {
  let newArray = [];
  for(let i = 0 ; i < arr.length ; i++) {
    if(!newArray.includes(arr[i])) {
      newArray.push(arr[i])
    }
  }
  return newArray;
}
// Test case for removeDuplicates
console.assert(JSON.stringify(removeDuplicates([1, 2, 2, 3, 4, 4, 5])) === JSON.stringify([1, 2, 3, 4, 5]), 'Test Case 1 Failed');
console.assert(JSON.stringify(removeDuplicates([10, 20, 30, 10, 40])) === JSON.stringify([10, 20, 30, 40]), 'Test Case 2 Failed');
console.assert(JSON.stringify(removeDuplicates([1, 1, 1, 1, 1])) === JSON.stringify([1]), 'Test Case 3 Failed');
console.assert(JSON.stringify(removeDuplicates([100, 200, 300, 100])) === JSON.stringify([100, 200, 300]), 'Test Case 4 Failed');
console.assert(JSON.stringify(removeDuplicates([7, 7, 7, 7, 7, 8, 9])) === JSON.stringify([7, 8, 9]), 'Test Case 5 Failed');
console.assert(JSON.stringify(removeDuplicates([])) === JSON.stringify([]), 'Test Case 6 Failed');
console.assert(JSON.stringify(removeDuplicates([1])) === JSON.stringify([1]), 'Test Case 7 Failed');

// Test case for removeDuplicates2
console.assert(JSON.stringify(removeDuplicates2([1, 2, 2, 3, 4, 4, 5])) === JSON.stringify([1, 2, 3, 4, 5]), 'Test Case 8 Failed');
console.assert(JSON.stringify(removeDuplicates2([10, 20, 30, 10, 40])) === JSON.stringify([10, 20, 30, 40]), 'Test Case 9 Failed');
console.assert(JSON.stringify(removeDuplicates2([1, 1, 1, 1, 1])) === JSON.stringify([1]), 'Test Case 10 Failed');
console.assert(JSON.stringify(removeDuplicates2([100, 200, 300, 100])) === JSON.stringify([100, 200, 300]), 'Test Case 11 Failed');
console.assert(JSON.stringify(removeDuplicates2([7, 7, 7, 7, 7, 8, 9])) === JSON.stringify([7, 8, 9]), 'Test Case 12 Failed');
console.assert(JSON.stringify(removeDuplicates2([])) === JSON.stringify([]), 'Test Case 13 Failed');
console.assert(JSON.stringify(removeDuplicates2([1])) === JSON.stringify([1]), 'Test Case 14 Failed');

console.log('All test cases passed successfully!');

