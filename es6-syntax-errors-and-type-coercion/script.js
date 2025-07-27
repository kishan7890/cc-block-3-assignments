const checkout = {
  items: [],
  total: 0,

  addItem(item) {
    // Try to convert price to a float
    const price = parseFloat(item.price);

    // Validate parsed price
    if (isNaN(price)) {
      console.log("❌ Invalid price.");
      return;
    }

    this.items.push({ ...item, price }); // Store item with numeric price
    this.total += price;
    console.log(`✅ Added "${item.name}" - $${price.toFixed(2)}`);
  },

  getTotal() {
    return `🧾 Total: $${this.total.toFixed(2)}`;
  }
};

// Test Cases
checkout.addItem({ name: "Coffee Maker", price: "99.95" }); // valid string
checkout.addItem({ name: "Milk", price: 3.50 });             // valid number
checkout.addItem({ name: "Broken Item", price: "abc" });     // invalid

console.log(checkout.getTotal()); // 🧾 Total: $103.45
