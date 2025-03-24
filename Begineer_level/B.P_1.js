/* ## 1. Reverse a String
- Write a function that reverses a string without using the built-in reverse() method.

**Estimated Time:** 15 minutes

```javascript
function reverseString(str) {
    // Your code here
}
``` */


function reverseString(str) {
  let reverseStr = ''
  str = str.split('')

  for(i = 1 ; i <= str.length; i++) {
    reverseStr += str[str.length - i]
  }
  return reverseStr
}

console.log(reverseString('uday kumar purbey'));  // "yebrup ramuk yadu"
console.log(reverseString('hello'));               // "olleh"
console.log(reverseString('12345'));               // "54321"
console.log(reverseString(''));                    // ""
console.log(reverseString('!@#'));                  // "#@!"
console.log(reverseString('abc def ghi'));         // "ihg fed cba"