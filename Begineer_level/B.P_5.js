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


// Test cases
console.log(findMin([10, 2, 34, 5, 67]));  // Output: 2
console.log(findMin([1, 2, 3, 4, 5]));     // Output: 1
console.log(findMin([0, -1, -5, -10]));    // Output: -10
console.log(findMin([100, 200, 300, 400])); // Output: 100
console.log(findMin([-3, -8, -2, -6]));    // Output: -8
console.log(findMin([])); // Output: undefined

console.log(findMin2([10, 2, 34, 5, 67]));  // Output: 2
console.log(findMin2([1, 2, 3, 4, 5]));     // Output: 1
console.log(findMin2([0, -1, -5, -10]));    // Output: -10
console.log(findMin2([100, 200, 300, 400])); // Output: 100
console.log(findMin2([-3, -8, -2, -6]));    // Output: -8
console.log(findMin2([])); // Output: undefined

