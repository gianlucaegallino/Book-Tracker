const myLibrary = [
  { author: "a", title: "a", pageCount: "a", hasBeenRead: "a", genre: "a" },
  { author: "b", title: "b", pageCount: "b", hasBeenRead: "b", genre: "b" },
];

function Book(author, title, pageCount, hasBeenRead, genre) {
  this.author = author;
  this.title = title;
  this.pageCount = pageCount;
  this.hasBeenRead = hasBeenRead;
  this.genre = genre;
}

function addBookToLibrary() {
  let book = new Book(author, title, pageCount, hasBeenRead, genre);
}
