/* ## 6. Sum of an Array
- Write a function that returns the sum of all the numbers in an array.

**Estimated Time:** 15 minutes

```javascript
function sumArray(arr) {
    // Your code here
}

``` */


function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}


function sumArray2(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Test case for sumArray
console.assert(sumArray([10, 2, 34, 5, 67]) === 118, 'Test Case 1 Failed');
console.assert(sumArray([1, 2, 3, 4, 5]) === 15, 'Test Case 2 Failed');
console.assert(sumArray([0, -1, -5, -10]) === -16, 'Test Case 3 Failed');
console.assert(sumArray([100, 200, 300, 400]) === 1000, 'Test Case 4 Failed');
console.assert(sumArray([-3, -8, -2, -6]) === -19, 'Test Case 5 Failed');
console.assert(sumArray([]) === 0, 'Test Case 6 Failed');

// Test case for sumArray2
console.assert(sumArray2([10, 2, 34, 5, 67]) === 118, 'Test Case 7 Failed');
console.assert(sumArray2([1, 2, 3, 4, 5]) === 15, 'Test Case 8 Failed');
console.assert(sumArray2([0, -1, -5, -10]) === -16, 'Test Case 9 Failed');
console.assert(sumArray2([100, 200, 300, 400]) === 1000, 'Test Case 10 Failed');
console.assert(sumArray2([-3, -8, -2, -6]) === -19, 'Test Case 11 Failed');
console.assert(sumArray2([]) === 0, 'Test Case 12 Failed');

console.log('All test cases passed successfully!');
