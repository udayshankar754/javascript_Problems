/* 
## 11. Check if a String is an Anagram
- Write a function that checks if two strings are anagrams.

**Estimated Time:** 30 minutes

```javascript
function isAnagram(str1, str2) {
    // Your code here
}
``` */

function isAnagram(str1, str2) {
  if(str1.length != str2.length) return false
  
  let str1Set = [...new Set(str1)];
  let str2Set = [...new Set(str2)];
  
  for(let i = 0 ; i < str1Set.length ; i++) {
      if(!str2Set.includes(str1Set[i])) return false
  }
  for(let i = 0 ; i < str2Set.length ; i++) {
      if(!str1Set.includes(str2Set[i])) return false
  }
  
  return true
}

function isAnagram2(str1, str2) {
  if (str1.length !== str2.length) return false;  // If lengths are not the same, they can't be anagrams

  // Sort both strings and compare
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}


console.assert(isAnagram('listen', 'silent') === true, 'Test Case 1 Failed');  // anagrams
console.assert(isAnagram('hello', 'world') === false, 'Test Case 2 Failed');   // not anagrams
console.assert(isAnagram('evil', 'vile') === true, 'Test Case 3 Failed');      // anagrams
console.assert(isAnagram('abc', 'cba') === true, 'Test Case 4 Failed');        // anagrams
console.assert(isAnagram('abcd', 'abce') === false, 'Test Case 5 Failed');     // not anagrams
console.assert(isAnagram('', '') === true, 'Test Case 6 Failed');              // empty strings are anagrams
console.assert(isAnagram('a', 'a') === true, 'Test Case 7 Failed');            // single character anagrams


console.assert(isAnagram2('listen', 'silent') === true, 'Test Case 8 Failed');  // anagrams
console.assert(isAnagram2('hello', 'world') === false, 'Test Case 9 Failed');   // not anagrams
console.assert(isAnagram2('evil', 'vile') === true, 'Test Case 10 Failed');      // anagrams
console.assert(isAnagram2('abc', 'cba') === true, 'Test Case 11 Failed');        // anagrams
console.assert(isAnagram2('abcd', 'abce') === false, 'Test Case 12 Failed');     // not anagrams
console.assert(isAnagram2('', '') === true, 'Test Case 13 Failed');              // empty strings are anagrams
console.assert(isAnagram2('a', 'a') === true, 'Test Case 14 Failed');            // single character anagrams

console.log('All test cases passed successfully!');
