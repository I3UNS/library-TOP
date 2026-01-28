/*
function Book(){
    if(!new.target){
        throw Error("You must use the new keyword before the constructor 'Book'");
    }

    this.title = "Omniscient Reader's Viewpoint",
    this.author = "Sing-Song",
    this.pages = "796",
    this.haveRead = true;
}
*/

const bookDisplay = document.getElementById("book");
const libraryArray = [];

function Book(title, author, pages, haveRead){
    if(!new.target){
        throw Error("You must use the new keyword before the constructor 'Book'");
    }

    this.title = title,
    this.author = author,
    this.pages = pages,
    this.haveRead = haveRead,
    this.bookID = crypto.randomUUID();

    return `BookID: ${this.bookID} - ${this.title} was written by ${this.author}. It consists of ${this.pages} pages. Current Read status: ${this.haveRead}`;
}

function addBook(book, library){
    library.push(book);
}

let bookOne = new Book('Estate Developer', 'N/A', '781', true);
let bookTwo = new Book('Idiotify Your Science', 'Jimmy Hopkins', '420', false);
addBook(bookOne, libraryArray);
addBook(bookTwo, libraryArray);

console.log(bookOne);
console.log(bookTwo);

function appendArrayToDisplay(){
    
    for (let i = 0; i < libraryArray.length; i++){
        const pTitle = document.createElement('p');
        const pAuthor = document.createElement('p');
        const pPages = document.createElement('p');
        const pStatus = document.createElement('p');
        const pID = document.createElement('p');
        pTitle.textContent = `Title: ${libraryArray[i].title}`;
        pAuthor.textContent = `Author: ${libraryArray[i].author}`;
        pPages.textContent = `Pages: ${libraryArray[i].pages}`;
        pStatus.textContent = `Status: ${libraryArray[i].haveRead}`;
        pID.textContent = `ID: ${libraryArray[i].bookID}`;
        bookDisplay.appendChild(pTitle);
        bookDisplay.appendChild(pAuthor);
        bookDisplay.appendChild(pPages);
        bookDisplay.appendChild(pStatus);
        bookDisplay.appendChild(pID);
    }
}

let bookThree = new Book('The Vault', 'Dallas Boxton', '563', true);
addBook(bookThree, libraryArray);

appendArrayToDisplay();