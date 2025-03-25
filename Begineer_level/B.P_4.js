/* ## 4. Find the Maximum Number in an Array
- Write a function that returns the maximum number from an array.

**Estimated Time:** 15 minutes

```javascript
function findMax(arr) {
    // Your code here
}
``` */

function findMax(arr) {
  arr.sort((a, b) => a - b)
  return arr[arr.length - 1 ]
}


function findMax2(arr) {
  if(arr.length == 0) return undefined;
 let max = arr[0]
 for(let i = 0; i < arr.length ; i++) {
   if(max < arr[i]) {
     max = arr[i]
   }
 }
 return max
}


// Test case for findMax
console.assert(findMax([10, 2, 34, 5, 67]) === 67, 'Test Case 1 Failed');
console.assert(findMax([1, 2, 3, 4, 5]) === 5, 'Test Case 2 Failed');
console.assert(findMax([0, -1, -5, -10]) === 0, 'Test Case 3 Failed');
console.assert(findMax([100, 200, 300, 400]) === 400, 'Test Case 4 Failed');
console.assert(findMax([-3, -8, -2, -6]) === -2, 'Test Case 5 Failed');
console.assert(findMax([]) === undefined, 'Test Case 6 Failed');

// Test case for findMax2
console.assert(findMax2([10, 2, 34, 5, 67]) === 67, 'Test Case 7 Failed');
console.assert(findMax2([1, 2, 3, 4, 5]) === 5, 'Test Case 8 Failed');
console.assert(findMax2([0, -1, -5, -10]) === 0, 'Test Case 9 Failed');
console.assert(findMax2([100, 200, 300, 400]) === 400, 'Test Case 10 Failed');
console.assert(findMax2([-3, -8, -2, -6]) === -2, 'Test Case 11 Failed');
console.assert(findMax2([]) === undefined, 'Test Case 12 Failed');

console.log('All test cases passed successfully!');
