/* ## 2. Factorial of a Number
- Write a function to calculate the factorial of a number.

**Estimated Time:** 20 minutes

```javascript
function factorial(num) {
    // Your code here
}
``` */

function factorial(num) {
  let fact = 1;
  for(let i = 1; i <= num ; i++) {
    fact *= i;
  }
  return fact
}

console.assert(factorial(2) === 2, 'Test Case 1 Failed');
console.assert(factorial(5) === 120, 'Test Case 2 Failed');
console.assert(factorial(0) === 1, 'Test Case 3 Failed');
console.assert(factorial(10) === 3628800, 'Test Case 4 Failed');
console.assert(factorial(3) === 6, 'Test Case 5 Failed');

console.log('All test cases passed successfully!');
