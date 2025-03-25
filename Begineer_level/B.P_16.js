/* ## 16. Convert Celsius to Fahrenheit
- Write a function that converts Celsius to Fahrenheit.

**Estimated Time:** 15 minutes

```javascript
function celsiusToFahrenheit(celsius) {
    // Your code here
}
``` */

// (0°C × 9/5) + 32 = 32°F
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32
}


// Test cases
console.assert(celsiusToFahrenheit(0) === 32, 'Test Case 1 Failed'); // freezing point: 0°C = 32°F
console.assert(celsiusToFahrenheit(100) === 212, 'Test Case 2 Failed'); // boiling point: 100°C = 212°F
console.assert(celsiusToFahrenheit(-40) === -40, 'Test Case 3 Failed'); // -40°C = -40°F (same in both scales)
console.assert(celsiusToFahrenheit(37) === 98.6, 'Test Case 4 Failed'); // human body temperature: 37°C = 98.6°F
console.assert(celsiusToFahrenheit(25) === 77, 'Test Case 5 Failed'); // room temperature: 25°C = 77°F

console.log('All test cases passed successfully!');
