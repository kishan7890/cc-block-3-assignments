function outerFunction() {
  const message = "Hello from the closure!";

  function innerFunction() {
    console.log(message); // Has access to `message` even after outerFunction finishes
  }

  return innerFunction; // Return inner function (but don’t call it yet)
}

// Create a closure
const myClosure = outerFunction();

// Now call the stored function
myClosure(); // Output: Hello from the closure!
