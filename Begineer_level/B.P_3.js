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

console.log(isPrime(23));  // true
console.log(isPrime(24));  // false
console.log(isPrime(2));   // true
console.log(isPrime(1));   // Provide a valid Number
console.log(isPrime(17));  // true