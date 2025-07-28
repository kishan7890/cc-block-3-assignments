function multiply(a, b) {
  return a * b;
}

function multiplyNumbers(x, y) {
  return multiply.apply(null, [x, y]);
}

// Test the function
console.log(multiplyNumbers(4, 5)); // Output: 20
