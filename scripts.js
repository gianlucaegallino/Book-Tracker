let modal = document.querySelector(".modalDialog");
let addBtn = document.querySelector(".addButton");
let subBtn = document.querySelector(".submitBtn");
let authorInput = document.querySelector(".author");
let titleInput = document.querySelector(".bookTitle");
let pageInput = document.querySelector(".pageCount");
let genreInput = document.querySelector(".genre");
let readInput = document.querySelector(".readStatus");
let myForm = document.querySelector(".myForm");

const myLibrary = [];

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
  //removes old books, if present
  let booklist = document.querySelectorAll(".book");
  booklist.forEach((book) => {
    book.remove();
  });
  let bookCount = 0;
  //Adds the books in the list
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
    <button class="removeBtn" data-booknumber="${bookCount}">Delete book</button>
    `;
    bookCount++;
  });
  //Adds removal listeners to books
  let remBtns = document.querySelectorAll(".removeBtn");
  remBtns.forEach((butt) => {
    butt.addEventListener("click", function () {
      let num = butt.dataset.booknumber;
      removeBook(num);
    });
  });
}

function popmodal() {
  modal.showModal();
}

function formSubmit(event) {
  let success = false;
  event.preventDefault();

  //gets values from the form
  let author = authorInput.value;
  let title = titleInput.value;
  let pages = pageInput.value;
  let read = readInput.checked;
  let genre = genreInput.value;

  //checks for empty fields
  if (author != "" && title != "" && pages != "" && genre != "") success = true;

  if (success) {
    addBookToLibrary(author, title, pages, read, genre);
    showAllBooks();
  } else {
    alert("One or more values are empty or invalid.");
  }
  // //Resets fields for next input
  myForm.reset();

  //Closes the modal
  modal.close();
}

function removeBook(bookid) {
  myLibrary.splice(bookid,1);
  showAllBooks();
}

//modal showing
addBtn.addEventListener("click", popmodal);

//form submission canceling
subBtn.addEventListener("click", formSubmit);

showAllBooks();
