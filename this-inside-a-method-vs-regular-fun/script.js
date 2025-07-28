let user = {
  username: "john_doe",
  showUsername: function() {
    console.log("Method:", this.username);
  }
};

function displayUsername() {
  console.log("Function:", this.username);
}

user.showUsername();     // Output: Method: john_doe
displayUsername();       // Output: Function: undefined (in strict mode) or global (non-strict)

displayUsername.call(user); // Output: Function: john_doe
