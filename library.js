const bookDisplay = document.getElementById("book");
const addBookBtn = document.getElementById("add");
const submitBtn = document.getElementById("submit");
const modal = document.querySelector("#modal")
const libraryArray = [];

class Book {
    constructor(title, author, pages, haveRead) {
        if (!new.target) {
            throw Error("You must use the new keyword before the constructor 'Book'");
        }

        this.title = title,
            this.author = author,
            this.pages = pages,
            this.haveRead = haveRead,
            this.bookID = crypto.randomUUID(),
            this.updateStatus = function () {
                this.haveRead = !this.haveRead;
            };
    }
}

function addBook(book, library){
    library.push(book);
}

function appendArrayToDisplay(){

    for(let i = 0; i < libraryArray.length; i++){

        const pTitle = document.createElement('p');
        const pAuthor = document.createElement('p');
        const pPages = document.createElement('p');
        const pStatus = document.createElement('p');
        const pStatusBtn = document.createElement('button');
        const pID = document.createElement('p');
        const removeBtn = document.createElement("button");
        
        pTitle.textContent = `Title: ${libraryArray[i].title}`;
        pAuthor.textContent = `Author: ${libraryArray[i].author}`;
        pPages.textContent = `Pages: ${libraryArray[i].pages}`;
        pStatus.textContent = `Read Status: ${libraryArray[i].haveRead}`;
        pStatusBtn.textContent = `Toggle`;
        pID.textContent = `ID: ${libraryArray[i].bookID}`;
        removeBtn.textContent = `Remove Book`;

        pTitle.id = `title`;
        pAuthor.id = `author`;
        pPages.id = `pages`;
        pStatus.id = `read-status`;
        pStatusBtn.id = `status-toggle-btn`;
        pID.id = "book-id";  
        pID.setAttribute("data-book-id", libraryArray[i].bookID);
        removeBtn.id = `remove-book`;

        pStatusBtn.addEventListener("click", ()=>{
            libraryArray[i].updateStatus();
            pStatus.textContent = `Read Status: ${libraryArray[i].haveRead}`;
        });

        removeBtn.addEventListener("click", () => {
            if (pID.dataset.bookId == `${libraryArray[i].bookID}`){
                `${libraryArray[i]}`.pop;
                bookDisplay.removeChild(bookContainer);
            };
        })
        
        const bookContainer = document.createElement("div");

        bookContainer.appendChild(pTitle);
        bookContainer.appendChild(pAuthor);
        bookContainer.appendChild(pPages);
        bookContainer.appendChild(pStatus);
        bookContainer.appendChild(pStatusBtn);
        bookContainer.appendChild(pID);
        bookContainer.appendChild(removeBtn);
        
        bookDisplay.appendChild(bookContainer);
    }
}

addBookBtn.addEventListener("click", () => {
    modal.showModal();
})

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const modalTitle = modal.querySelector('#title').value;
    const modalAuthor = modal.querySelector("#author").value;
    const modalPages = modal.querySelector('#pages').value;
    const modalReadStatus = modal.querySelector('#read-status').checked;

    const currBook = new Book(modalTitle, modalAuthor, modalPages, modalReadStatus);
    
    addBook(currBook, libraryArray);
    appendArrayToDisplay();
    modal.close();
})