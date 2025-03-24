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

console.log(factorial(2));  // Output: 2 
console.log(factorial(5));  // Output: 120 
console.log(factorial(0));  // Output: 1 
console.log(factorial(10)); // Output: 3628800 
console.log(factorial(3));  // Output: 6
