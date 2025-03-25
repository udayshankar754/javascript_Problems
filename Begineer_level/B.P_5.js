/* 
## 5. Find the Minimum Number in an Array
- Write a function that returns the minimum number from an array.

**Estimated Time:** 15 minutes

```javascript
function findMin(arr) {
    // Your code here
}
``` */


function findMin(arr) {
  if(arr.length == 0) return undefined;
  arr.sort((a, b) => a - b)
  return arr[0 ]
}


function findMin2(arr) {
  if(arr.length == 0) return undefined;
 let min = arr[0]
 for(let i = 0; i < arr.length ; i++) {
   if(min > arr[i]) {
     min = arr[i]
   }
 }
 return min
}


// Test case for findMin
console.assert(findMin([10, 2, 34, 5, 67]) === 2, 'Test Case 1 Failed');
console.assert(findMin([1, 2, 3, 4, 5]) === 1, 'Test Case 2 Failed');
console.assert(findMin([0, -1, -5, -10]) === -10, 'Test Case 3 Failed');
console.assert(findMin([100, 200, 300, 400]) === 100, 'Test Case 4 Failed');
console.assert(findMin([-3, -8, -2, -6]) === -8, 'Test Case 5 Failed');
console.assert(findMin([]) === undefined, 'Test Case 6 Failed');

// Test case for findMin2
console.assert(findMin2([10, 2, 34, 5, 67]) === 2, 'Test Case 7 Failed');
console.assert(findMin2([1, 2, 3, 4, 5]) === 1, 'Test Case 8 Failed');
console.assert(findMin2([0, -1, -5, -10]) === -10, 'Test Case 9 Failed');
console.assert(findMin2([100, 200, 300, 400]) === 100, 'Test Case 10 Failed');
console.assert(findMin2([-3, -8, -2, -6]) === -8, 'Test Case 11 Failed');
console.assert(findMin2([]) === undefined, 'Test Case 12 Failed');

console.log('All test cases passed successfully!');
