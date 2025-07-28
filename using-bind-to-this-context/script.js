let car = {
  brand: "Tesla",
  getBrand: function() {
    return this.brand;
  }
};

// Bind the method to `car` permanently
let boundGetBrand = car.getBrand.bind(car);

// Call the bound function
console.log(boundGetBrand()); // Output: Tesla
