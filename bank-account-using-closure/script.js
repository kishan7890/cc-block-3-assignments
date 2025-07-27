function createBankAccount(initialBalance) {
  let balance = initialBalance; // private variable

  return {
    deposit(amount) {
      if (amount <= 0) {
        console.log("❌ Deposit must be positive.");
        return balance;
      }
      balance += amount;
      return balance;
    },

    withdraw(amount) {
      if (amount <= 0) {
        console.log("❌ Withdrawal must be positive.");
        return balance;
      }

      if (amount > balance) {
        console.log("❌ Insufficient funds.");
        return balance;
      }

      balance -= amount;
      return balance;
    },

    getBalance() {
      return balance;
    }
  };
}

const account = createBankAccount(100);

console.log(account.deposit(50));     // Output: 150
console.log(account.withdraw(30));    // Output: 120
console.log(account.getBalance());    // Output: 120

console.log(account.balance);         // ❌ undefined (cannot access private balance)
