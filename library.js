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

console.log(`Library: ${libraryArray}`);