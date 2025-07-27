function createCounter() {
  let count = 0; // Private variable

  return {
    increment() {
      count++;
      return count;
    },
    getCount() {
      return count;
    }
  };
}

// Test the counter
const counter = createCounter();

console.log(counter.increment()); // Output: 1
console.log(counter.increment()); // Output: 2
console.log(counter.getCount());  // Output: 2

// Trying to access count directly
console.log(counter.count); // undefined ❌ — count is private
