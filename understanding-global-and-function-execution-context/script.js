// Global Execution Context
let age = 25; // Global variable

// Function to display the age
function displayAge() {
  console.log("Display Age:", age);
}

// Function to change the age
function changeAge() {
  age = 30; // Updates the global age variable
  console.log("Age updated inside changeAge:", age);
}

// Calling the functions
displayAge();    // Output: Display Age: 25
changeAge();     // Output: Age updated inside changeAge: 30
displayAge();    // Output: Display Age: 30 (shows updated value)
