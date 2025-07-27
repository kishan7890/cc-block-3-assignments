const library = {
  books: [
    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }
  ],

  addBook(book) {
    const { title, author, year } = book;

    if (!title || !author || !year) {
      console.log("❌ Book information is incomplete.");
      return;
    }

    this.books.push({ title, author, year });
    console.log(`✅ "${title}" has been added to the library.`);
  },

  findBookByTitle(title) {
    return this.books.find(book => book.title === title);
  },

  removeBook(title) {
    const index = this.books.findIndex(book => book.title === title);

    if (index !== -1) {
      const removed = this.books.splice(index, 1);
      console.log(`✅ "${removed[0].title}" has been removed from the library.`);
    } else {
      console.log("❌ Book not found.");
    }
  }
};

// ❌ This book is missing a 'title', so it should not be added
library.addBook({ author: "George Orwell", year: 1949 });

// ✅ Add a valid book
library.addBook({ title: "1984", author: "George Orwell", year: 1949 });

// ✅ View current book count
console.log("📚 Total books in library:", library.books.length); // Should be 2

// ✅ Try removing a book
library.removeBook("The Hobbit");

// ✅ Try finding a book
const found = library.findBookByTitle("1984");
console.log("🔍 Found book:", found);
