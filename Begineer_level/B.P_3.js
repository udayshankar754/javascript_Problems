/* 
## 3. Check if a Number is Prime
- Write a function to check if a number is prime.

**Estimated Time:** 25 minutes

```javascript
function isPrime(num) {
    // Your code here
}
``` */

function isPrime(num) {

  if(num < 2)
    return "Provide a valid Number"
    
  if(num == 2) 
    return true;
    
  for(let i = 2 ; i < num ; i++) {
    if(num%i === 0) {
      return false;
    }
  }
  return true;
}

console.assert(isPrime(23) === true, 'Test Case 1 Failed');
console.assert(isPrime(24) === false, 'Test Case 2 Failed');
console.assert(isPrime(2) === true, 'Test Case 3 Failed');
console.assert(isPrime(1) === 'Provide a valid Number', 'Test Case 4 Failed');
console.assert(isPrime(17) === true, 'Test Case 5 Failed');

console.log('All test cases passed successfully!');
