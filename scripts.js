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
  myLibrary.push(book);
}

function showAllBooks(){
    let bookContainer = document.querySelector(".BooksContainer");
    forEach (book in myLibrary)
    {
        //Creates a book card
        const div = document.createElement("div");
        bookContainer.appendChild(div);
        div.classList.add("book");
        const p = document.createElement("p");
        div.appendChild(p);
        p.classList.add("booktext");
        p.innerText("hi!");
    }
}

showAllBooks();