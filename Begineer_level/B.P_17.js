/* ## 17. Convert Fahrenheit to Celsius
- Write a function that converts Fahrenheit to Celsius.

**Estimated Time:** 15 minutes

```javascript
function fahrenheitToCelsius(fahrenheit) {
    // Your code here
}
``` */

// (32°F − 32) × 5/9 = 0°C
function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9 ;
}

// Test cases
console.assert(fahrenheitToCelsius(32) === 0, 'Test Case 1 Failed'); // freezing point: 32°F = 0°C
console.assert(fahrenheitToCelsius(212) === 100, 'Test Case 2 Failed'); // boiling point: 212°F = 100°C
console.assert(fahrenheitToCelsius(-40) === -40, 'Test Case 3 Failed'); // -40°F = -40°C (same in both scales)
console.assert(fahrenheitToCelsius(98.6) === 37, 'Test Case 4 Failed'); // human body temperature: 98.6°F = 37°C
console.assert(fahrenheitToCelsius(77) === 25, 'Test Case 5 Failed'); // room temperature: 77°F = 25°C

console.log('All test cases passed successfully!');
