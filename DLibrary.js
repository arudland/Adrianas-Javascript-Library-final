function Library(){
  this.books =[];
  if (typeof(Storage) !== "undefined") {
      //console.log('Yey! there is Web Storage support..');
      // Retrieve
      var testStorage = JSON.parse(localStorage.getItem("myLibrary"));
      //console.log('this is testStorage: ' + JSON.stringify(testStorage));
      if (typeof(testStorage) !== "undefined" && testStorage != null) {
        this.books = testStorage;
      } else {
        localStorage.setItem("myLibrary", JSON.stringify(this.books));
      }
  };
}

var newLibrary = new Library();
// getBooks function uses single instance of Library, and returns its books
Library.prototype.getBooks = function() {
  return this.books;
  //return this.books;
}
// book constructur/prototype
var Book = function(title, author, numberOfPages, publishDate){
  if (!newLibrary.validateString(title)){
    console.log("Invalid Title");
    alert("Invalid Title");
  }
  if (!newLibrary.validateString(author)){
    console.log("Invalid author");
    alert("Invalid author");
  }
  if (!newLibrary.validateNumber(numberOfPages)){
    console.log("Invalid pages number");
    alert("Invalid pages number");
  }
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.publishDate = publishDate;
};

// Start of webstorage function,  newLibrary.webstorageStore();
Library.prototype.webstorageStore = function (){
  if (typeof(Storage) !== "undefined") {
      console.log('Yey! there is Web Storage support..');
      // Store
      localStorage.setItem("myLibrary", JSON.stringify(this.getBooks()));
  } else {
      console.log('Sorry! No Web Storage support..');
    }
}

Library.prototype.webstorageRetrieve = function (){
  if (typeof(Storage) !== "undefined") {
      // Retrieve
      var testStorage = JSON.parse(localStorage.getItem("myLibrary"));
      //console.log('this is testStorage: ' + testStorage[0].title);
  } else {
      console.log('Sorry! No Web Storage support..');
    }
}

Library.prototype.searchBook = function(title,author){
  if (!this.validateString(title)){
    return false;
  }
  if (!this.validateString(author)){
    return false;
  }
  for (var i = 0; i < this.getBooks().length; i++){
    if (this.getBooks()[i].title.toLowerCase() == title.toLowerCase() && this.getBooks()[i].author.toLowerCase() == author.toLowerCase()){
      console.log("Cannot add this Book as it already exists");
      return true;
    }
  }
  console.log("This book was not in the Library and will be added");
  return false;
};


Library.prototype.addBook = function(addingBook){
  if (addingBook == null){
    return false;
  }
  if (!this.validateString(addingBook.title)){
    return false;
  }
  if (!this.validateString(addingBook.author)){
    return false;
  }
  if (!this.validateNumber(addingBook.numberOfPages)){
    return false;
  }
  console.log(this.searchBook(addingBook.title,addingBook.author));
  if (this.searchBook(addingBook.title,addingBook.author) === false){
    this.getBooks().push(addingBook);
    console.log(JSON.stringify(this.books));
    this.webstorageStore();
    // console.log(JSON.stringify(books));
    return true;
  }else{
    console.log("Book already exists in library");
    return false;
  }
}

//Start of addBooks function
Library.prototype.addBooks = function(multipleBooks){
   //console.log(multipleBooks.length);
   if (Array.isArray(multipleBooks) == false){
     console.log("Your entry is not an array");
     return false;
   }
   var booksAdded = 0;
   for (var i = 0; i < multipleBooks.length; i++){
     if (this.addBook(multipleBooks[i])){
       booksAdded++;
     }
   }
   return  booksAdded;
 }

// start of removeBookByTitle function, assumes that there could be multiple
// books of the same title, this will remove all of them. Title case insensitive
Library.prototype.removeBookByTitle = function(title){
  if (!this.validateString(title)){
    return false;
  }
  var removed = false;
  for (var i = this.getBooks().length - 1; i >= 0; i--){ //in reverse so index == i without modification from splice
    if (this.getBooks()[i].title.toLowerCase() == title.toLowerCase()){
      console.log("found and Removed book: " + this.getBooks()[i].title);
      this.getBooks().splice(i,1);
      removed = true;
    }
  }
  this.webstorageStore();
  console.log("removed: "+ removed);
  return removed;

}

Library.prototype.removeBookByAuthor = function(authorName){
  if (!this.validateString(authorName)){
    return false;
  }
  var removed = false;
  for (var i = this.getBooks().length - 1; i >= 0; i--){ //in reverse so index == i without modification from splice
    if (this.getBooks()[i].author.toLowerCase() == authorName.toLowerCase()){
      console.log("found and Removed book with author: " + this.getBooks()[i].author);
      this.getBooks().splice(i,1);
      removed = true;
    }
  }
  this.webstorageStore();
  console.log("removed: "+ removed);
  return removed;
}

//Start of getRandomIndex function
 Library.prototype.getRandomIndex = function() {
  var indexRandom = Math.floor((Math.random()*this.getBooks().length));
  return indexRandom;
}

Library.prototype.getRandomBook = function(){
  var book = this.getBooks()[this.getRandomIndex()];
  console.log("The random title is: "+ this.getBooks()[this.getRandomIndex()].title);
  return book;
}

Library.prototype.getRandomAuthorName = function(){
  var book = this.getRandomBook();
  console.log("The random author is: "+ this.getBooks()[this.getRandomIndex()].author);
  return book.author;
}

//todo: work on this if I have time
Library.prototype.getByMultipleAttribute = function(attr, searchString){

}

Library.prototype.validateString = function (value){
  if (value == null || typeof(value) === "undefined" || value.length == 0){
    console.log("Invalid entry on validateString");
    return false;
  }else{
    return true;
  }
}

Library.prototype.validateNumber = function (value){
  if (!this.validateString(value)){
    return false;
  }else{
    return !isNaN(parseInt(value));
  }
}

Library.prototype.getByAttribute = function(attr, searchString){
  var arrayOfValues = [];
  for (var i=0; i < this.getBooks().length; i++){
    //attr passed in is either 'title' or 'author', attributes of Book template
    //eval replaces the string 'this.getBooks()[i].title' with the variable this.getBooks()[i].title
    //or the string 'this.getBooks()[i].author' with the variable this.getBooks()[i].author
    //The argument of the eval() function is a string. If the string represents an expression, eval() evaluates the expression
    if (eval('this.getBooks()[i].' + attr).toLowerCase().search(searchString.toLowerCase()) > -1){
      arrayOfValues.push(eval('this.getBooks()[i].' + attr));
    }
  }
  return arrayOfValues;
}

Library.prototype.getBookByTitle = function(title){
  return this.getByAttribute('title',title);
}

Library.prototype.getBooksByAuthor = function(authorName){
  return this.getByAttribute('author',authorName);
}

Library.prototype.getAuthors = function (){
  // Create two output arrays, one of lower case values, and other for exact values
    var authors = [];
    var authorsLowerCase = [];

    // Loop through each Book in your books array
    for (var i = 0; i < this.getBooks().length; i++) {
    	// Check if our array of lower case values has this value (lower case) or not. If not found, returns -1
    	if (authorsLowerCase.indexOf(this.getBooks()[i].author.toLowerCase()) == -1) {
        	authors.push(this.getBooks()[i].author);
          authorsLowerCase.push(this.getBooks()[i].author.toLowerCase())
      }
    }
    console.log(authors);
    return authors;
}


//testing of addBook and addbooks, etc
var p1 = new Book("the sun", "Brothis", 30 , new Date(2017, 5, 24));
var p2 = new Book("the river", "Rudland", 28, new Date(2017, 5, 24));
var p3 = new Book("the sea", "Colmenares", 67, new Date(2017, 5, 24));
var pCollection = [p1, p2, p3];

newLibrary.addBook(p1);
newLibrary.addBook(p2);
newLibrary.addBook(p3);
//
var bookEntry1 = new Book("the rainbow", "Brothis", 30, new Date(2017, 5, 24));
var bookEntry2 = new Book("the unicorn", "Rudland", 28, new Date(2017, 5, 24));
var bookEntry3 = new Book("the sea", "gomez", 67, new Date(2017, 5, 24));
var variousBooks = [bookEntry1, bookEntry2, bookEntry3];

newLibrary.addBooks(variousBooks);
//console.log(JSON.stringify(variousBooks));

//var bookEntry11 = new Book("Windows", "Microsoft", 30, new Date(2015, 5, 24));
var bookEntry11 = new Book("Windows", "Microsoft", 30, new Date('03/25/2015'));
//var bookEntry21 = new Book("door to nowhere", "Smith", 28, new Date('2015-03-25'));
var bookEntry21 = new Book("door to nowhere", "Smith", 28, new Date('Mar 25 2015'));
//var bookEntry21 = new Book("", "Smith", 28, new Date('Mar 25 2015'));
newLibrary.addBook(bookEntry11);
newLibrary.addBook(bookEntry21);
//newLibrary.addBooks(pCollection);

newLibrary.removeBookByAuthor('rudland');
//console.log("newLibrary : " + JSON.stringify(newLibrary.getBooks()));

//newLibrary.removeBookByAuthor('smith');
newLibrary.removeBookByTitle('the sea');
//Testing getBooksByAuthor
//console.log(newLibrary.getBooksByAuthor('f').toString());
console.log(newLibrary.getBooksByAuthor('r').toString());
//Testing getBookByTitle
//console.log(this.getBookByTitle('n').toString());

//this.getRandomBook();
//this.getRandomAuthorName(); //this calls getRandomBook, and will also console.log the book title

//Testing getAuthors
console.log("Showing all authors: ");
newLibrary.getAuthors();

//************



/*More calls to addbook, */
/*newLibrary.addBook('the Illiad', 'homer', 121212, new Date(2017, 12, 12));
newLibrary.addBook('the sky is falling', 'Bird', 121212, new Date(2017, 10, 10));
newLibrary.addBook('It will snow today', 'Bird', 121212, new Date(2017, 10, 10));*/
