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


console.log(findMax([10, 2, 34, 5, 67]));  // Output: 67
console.log(findMax([1, 2, 3, 4, 5]));     // Output: 5
console.log(findMax([0, -1, -5, -10]));    // Output: 0
console.log(findMax([100, 200, 300, 400])); // Output: 400
console.log(findMax([-3, -8, -2, -6]));    // Output: -2
console.log(findMax([])); // Output: undefined

console.log(findMax2([10, 2, 34, 5, 67]));  // Output: 67
console.log(findMax2([1, 2, 3, 4, 5]));     // Output: 5
console.log(findMax2([0, -1, -5, -10]));    // Output: 0
console.log(findMax2([100, 200, 300, 400])); // Output: 400
console.log(findMax2([-3, -8, -2, -6]));    // Output: -2
console.log(findMax2([])); // Output: undefined