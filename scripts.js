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

function addBookToLibrary(author, title, pageCount, hasBeenRead, genre) {
  let book = new Book(author, title, pageCount, hasBeenRead, genre);
  myLibrary.push(book);
}

function showAllBooks() {
  let bookContainer = document.querySelector(".BooksContainer");
  myLibrary.forEach((book) => {
    //Creates a book card
    const div = document.createElement("div");
    bookContainer.appendChild(div);
    div.classList.add("book");
    //Gets values of each book
    let title = book.title;
    let author = book.author;
    let pages = book.pageCount;
    let read = book.hasBeenRead;
    let genre = book.genre;
    //Creates inner html with the book info.
    div.innerHTML = `
    <h2 class="bookTitle">${title}</h2>
    <p>Author: ${author}</p>
    <p>Pages: ${pages}</p>
    <p>Read?: ${read}</p>
    <p>Genre: ${genre}</p>
    `;
  });
}

function popmodal(){
  console.log("a");
  let modal = document.querySelector(".modalDialog");
  modal.showModal();
}

let addBtn = document.querySelector(".addButton");
addBtn.addEventListener("click", popmodal);

showAllBooks();
