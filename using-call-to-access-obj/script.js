function personInfo() {
  console.log(`Name: ${this.name}, Age: ${this.age}`);
}

const person = {
  name: "Alice",
  age: 25
};

// Call the function with `person` as its `this` context
personInfo.call(person);
