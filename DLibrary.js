function Library(){
  this.books =[];
}
// getBooks function uses single instance of Library, and returns its books
Library.prototype.getBooks = function() {
  return this.books;
}
// book constructor
var Book = function(title, author, numberOfPages, publishDate){
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.publishDate = publishDate;
};

Book.prototype.validateString = function (value){
  if (value == null || typeof(value) === "undefined" || value.length == 0){
    console.log("Invalid entry on validateString");
    //alert('Invalid entry or field left empty');
    $('.jumbotron').html("<h2 class=\"blue-font\">" + "Invalid entry or field left empty" + "</h2>");
    return false;
  }else{
    return true;
  }
}

Book.prototype.validateNumber = function (value){
  if (!this.validateString(value)){
    alert('Invalid number or field left empty');
    $('.jumbotron').html("<h2 class=\"blue-font\">" + "Invalid entry or field left empty" + "</h2>");
    return false;
  }else{
    return !isNaN(parseInt(value));
  }
}
// Start of webstorage function,  newLibrary.webstorageStore();
Library.prototype.webstorageStore = function (){
  if (typeof(Storage) !== "undefined") {
      console.log('Yey! there is Web Storage support..');
      localStorage.setItem("myLibrary", JSON.stringify(this.getBooks()));
  } else {
      console.log('Sorry! No Web Storage support..');
    }
}

Library.prototype.webstorageRetrieve = function (){
  if (typeof(Storage) !== "undefined") {
      var testStorage = JSON.parse(localStorage.getItem("myLibrary"));
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
  if (!this.validateDate(addingBook.publishDate)){
    return false;
  }
  console.log('addBook - Searching for book ' + addingBook.title + ' returned :' + this.searchBook(addingBook.title,addingBook.author));
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

Library.prototype.validateString = function (value){
  if (value == null || typeof(value) === "undefined" || value.length == 0){
    console.log("Invalid entry on validateString");
    //alert('Invalid entry or field left empty');
    $('.jumbotron').html("<h2 class=\"blue-font\">" + "Invalid entry or field left empty" + "</h2>");
    return false;
  }else{
    return true;
  }
}
Library.prototype.validateNumber = function (value){
  if (!this.validateString(value)){
    alert('Invalid entry or field left empty');
    $('.jumbotron').html("<h2 class=\"blue-font\">" + "Invalid entry or field left empty" + "</h2>");
    return false;
  }else{
    return !isNaN(parseInt(value));
  }
}
Library.prototype.validateDate = function (value){
  if (!this.validateString(value)){
    alert('Invalid entry or field left empty');
    $('.jumbotron').html("<h2 class=\"blue-font\">" + "Invalid entry or field left empty" + "</h2>");
    return false;
  }else{
    return true;
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
      arrayOfValues.push(this.getBooks()[i].title);
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

//************

//************
/* Jquery function handlers */
Library.prototype.displayBookByTitle = function(){
  var bookinput = $('#get-book-by-input').val();
  if (bookinput!=''){
    bookinput = bookinput.trim();
    var book = this.getBookByTitle(bookinput);
    if (book.length != 0){
      //$('#get-book-by-input').val('');
      $('.jumbotron').html("<h2 class=\"blue-font\">" + "We found these titles: " + book.toString() + "</h2>");
    }else{
      //$('#get-book-by-input').val('');
      $('.jumbotron').html("<h2 class=\"blue-font\">" + "We found no titles matching your search" + "</h2>");
    }
  }else{
    $('.jumbotron').html("<h2 class=\"blue-font\">" + "Please enter a title " + "</h2>");
  }
  $('#get-book-by-input').val('');
}
Library.prototype.displayBookByAuthor = function(){
  var bookinput = $('#get-book-by-input').val();
  if (bookinput!=''){
    bookinput = bookinput.trim();
    var book = this.getBooksByAuthor(bookinput);
    if (book.length != 0){
      //$('#get-book-by-input').val('');
      $('.jumbotron').html("<h2 class=\"blue-font\">" + "We found these titles: " + book.toString() + "</h2>");
    }else{
      //$('#get-book-by-input').val('');
      $('.jumbotron').html("<h2 class=\"blue-font\">" + "We found no authors matching your search" + "</h2>");
    }
  }else{
    $('.jumbotron').html("<h2 class=\"blue-font\">" + "Please enter a name " + "</h2>");
  }
  $('#get-book-by-input').val('');
}
Library.prototype.displayRandomBook = function(){
  var book = this.getRandomBook();//
  var randombook = book.title;
  $('.jumbotron').html("<h2 class=\"blue-font\">" + "We selected this title: " + randombook + "</h2>");
}
Library.prototype.displayRandomAuthor = function(){
  var author = this.getRandomAuthorName();
  $('.jumbotron').html("<h2 class=\"blue-font\">" + "We selected this author: " + author + "</h2>");
}
Library.prototype.remBookByAuthor = function(){
  var bookinput = $('#remove-book').val();
  if (bookinput!=''){
    bookinput = bookinput.trim();
    console.log('remBookByAuthor: ' + bookinput);
    var result = this.removeBookByAuthor(bookinput);
    $('#remove-book').val('');
    if (result == true){
      $('.jumbotron').html("<h2 class=\"blue-font\">" + "We removed books by this author: " + (result?bookinput:'') + "</h2>");
      this.populateTable();
    }else{
      $('.jumbotron').html("<h2 class=\"blue-font\">" + "We didn't find any books by the author you requested" + "</h2>");
    }
  }else{
    $('.jumbotron').html("<h2 class=\"blue-font\">" + "Please enter an author name " + "</h2>");
  }
}
Library.prototype.remBookByTitle = function(){
  var bookinput = $('#remove-book').val();
  if (bookinput!=''){
    bookinput = bookinput.trim();
    console.log('remBookByTitle: ' + bookinput);
    var result = this.removeBookByTitle(bookinput);
    $('#remove-book').val('');
    if (result == true){
      $('.jumbotron').html("<h2 class=\"blue-font\">" + "We removed this book: " + (result?bookinput:'') + "</h2>");
      this.populateTable();
    }else{
      $('.jumbotron').html("<h2 class=\"blue-font\">" + "We didn't find any books with the title you requested" + "</h2>");
    }
  }else{
    $('.jumbotron').html("<h2 class=\"blue-font\">" + "Please enter a title" + "</h2>");
  }
};

Library.prototype.addBookUser = function(){
  var bookinput1 = $('#addbook-title').val().trim();
  var bookinput2 = $('#addbook-author').val().trim();
  var bookinput3 = parseInt($('#addbook-pages').val().trim());
  //var bookinput3 = $('#addbook-pages').val();
  var bookinput4 = $('#addbook-date').val();
  //$('#addbook-date').datepicker("option", "disabled", true);
  var bookAdd = new Book(bookinput1,bookinput2,bookinput3,bookinput4);
  var addBookvalue = this.addBook(bookAdd);
  this.populateTable();
  $('#addbook-title').val('');
  $('#addbook-author').val('');
  $('#addbook-pages').val(null);
  $('#addbook-date').val(null);
  $('.jumbotron').html("<h2 class=\"blue-font\">" + (addBookvalue?'Book successfully added':'Failed to add book') + "</h2>");
}

Library.prototype.populateTable = function(){
  var tableElements = "<tbody><tr><th>Title</th><th>Author</th><th>Pages</th><th>Publish date</th></tr>";
  for (var i = 0;  i < this.books.length; i++) {
    tableElements += "<tr><td>" + this.books[i].title + "</td><td>" + this.books[i].author;
    tableElements += "</td><td>" + this.books[i].numberOfPages + "</td><td>" + this.books[i].publishDate.toString().substring(0,10);
    tableElements += "</td></tr>";
  }
  tableElements += "</tbody>";
  $("#library-table").html(tableElements);
}

Library.prototype.showAddMultipleBooks = function(){
  var addBooksDiv = $('#multiple-books-table-div');
  if (addBooksDiv.css("display") == "none"){
    addBooksDiv.css("display", "block");
    $("#add-multiple-books-label").show();
    $("#addMore-No-Button").show();
    $("#addMore-Yes-Button").show();
  }else{
    addBooksDiv.css("display", "none");
  }
}

 Library.prototype.showAuthors = function(){
  var authorsDiv = $('#show-authors-table-div');
  if (authorsDiv.css("display") == "none"){
    authorsDiv.css("display", "block");
    var arrayAuthors = this.getAuthors();
    var tableElements = "<tbody><tr><th>List of Authors</th></tr>";
    for (var i = 0;  i < arrayAuthors.length; i++) {
      tableElements += "<tr><td>" + arrayAuthors[i];
      tableElements += "</td></tr>";
    }
    tableElements += "</tbody>";
    $("#show-authors-table").html(tableElements);
  }else{
    authorsDiv.css("display", "none");
  }
}
var multiRowCount = 1;

Library.prototype.addingRowsAddBooks = function(){
  $("#addbooks-table > tbody:last-child")
  	.append('<tr><td><input id=\"multiple-input-title'  + multiRowCount + '\" size=\"30\" type=\"text\"></td>' +
  	            '<td><input id=\"multiple-input-author' + multiRowCount + '\" size=\"20\" type=\"text\"></td>' +
  	            '<td><input id=\"multiple-input-pages'  + multiRowCount + '\" size=\"3\"  type=\"number\"></td>' +
  	            '<td><input id=\"multiple-input-date'   + multiRowCount + '\" size=\"10\"  type=\"date\"></td></tr>');
  multiRowCount++;
}

Library.prototype.emptyMultipleBooksTable = function(){
  var tableElements = "<tbody><tr><th>Title</th><th>Author</th><th>Pages</th><th>Publish date</th></tr>";
  tableElements += "<tr><td><input id=\"multiple-input-title0\" size=\"30\" type=\"text\"></td>";
  tableElements += "<td><input id=\"multiple-input-author0\" size=\"20\" type=\"text\"></td>";
  tableElements += "<td><input id=\"multiple-input-pages0\" size=\"3\"  type=\"number\"></td>";
  tableElements += "<td><input id=\"multiple-input-date0\" size=\"10\"  type=\"date\"></td></tr></tbody>";
  multiRowCount = 1;
  $("#addbooks-table").html(tableElements);
  //just added this to test clearing in firefox
  $('#multiple-input-title0').val('');
  $('#multiple-input-author0').val('');
  $('#multiple-input-pages0').val(null);
  $('#multiple-input-date0').val(null);
}

Library.prototype.AddBooksMultiple = function(){
  var variousBooksEntry = [];
  for (var i = 0; i<multiRowCount; i++){
    var bookinputs1 = $('#multiple-input-title'  + i).val().trim();
    var bookinputs2 = $('#multiple-input-author' + i).val().trim();
    //var bookinputs3 = $('#multiple-input-pages'  + i).val();
    var bookinputs3 = parseInt($('#multiple-input-pages' + i).val().trim());
    var bookinputs4 = $('#multiple-input-date'   + i).val();
    var bookAdd = new Book(bookinputs1,bookinputs2,bookinputs3,bookinputs4);
    //this part in if, for no more books to add, user clicked NO
    variousBooksEntry.push(bookAdd);
    //console.log('I am the array of multiple books title: ' + JSON.stringify(variousBooksEntry));
  }
  var booksAddedTrue = this.addBooks(variousBooksEntry);
  this.populateTable();
  $('.jumbotron').html("<h2 class=\"blue-font\">" + "We added: " + booksAddedTrue +  " books</h2>");
  this.emptyMultipleBooksTable();
  //this.showAddMultipleBooks();
  var addBooksDiv = $('#multiple-books-table-div');
  addBooksDiv.css("display", "none");
}

Library.prototype.bindEvents = function(){
  this.$getbookbuttontitle1.on('click',($.proxy(this.displayBookByTitle, this)));
  this.$getbookbuttonauthor1.on('click', ($.proxy(this.displayBookByAuthor, this)));
  this.$removebuttontitle1.on('click', ($.proxy(this.remBookByTitle, this)));
  this.$removebuttonauthor1.on('click', ($.proxy(this.remBookByAuthor, this)));
  this.$Randombuttontitle1.on('click', ($.proxy(this.displayRandomBook, this)));
  this.$Randombuttonauthor1.on('click', ($.proxy(this.displayRandomAuthor, this)));
  this.$addbookbutton1.on('click', ($.proxy(this.addBookUser, this)));
  this.$multiplebooksbutton1.on('click', ($.proxy(this.showAddMultipleBooks, this)));
  this.$listauthorsbutton1.on('click', ($.proxy(this.showAuthors, this)));
  this.$addMoreYesButton1.on('click',($.proxy(this.addingRowsAddBooks, this)));
  this.$addMoreNoButton1.on('click',($.proxy(this.AddBooksMultiple, this)));
}
Library.prototype.webStorageInit = function(){
  if (typeof(Storage) !== "undefined") {
      var testStorage = localStorage.getItem("myLibrary");
      console.log('this is testStorage: ' + JSON.stringify(testStorage));
      if (typeof(testStorage) !== "undefined" && testStorage != null) {
        this.books = JSON.parse(testStorage);
      } else {
        localStorage.setItem("myLibrary", JSON.stringify(this.books));
      }
  };
}

Library.prototype.init = function(){
  this.$getbookbuttontitle1 = $('#getbook-button-title');
  this.$getbookbuttonauthor1 = $('#getbook-button-author');
  this.$removebuttontitle1 = $('#remove-button-title');
  this.$removebuttonauthor1 = $('#remove-button-author');
  this.$Randombuttontitle1 = $('#Random-button-title');
  this.$Randombuttonauthor1 = $('#Random-button-author');
  this.$addbookbutton1 = $('#addbook-button');
  this.$multiplebooksbutton1 = $('#multiple-books-button');
  this.$listauthorsbutton1 = $('#list-authors-button');
  this.$addMoreYesButton1 = $('#addMore-Yes-Button');
  this.$addMoreNoButton1 = $('#addMore-No-Button');
  $("#add-multiple-books-label").hide();
  $("#addMore-No-Button").hide();
  $("#addMore-Yes-Button").hide();
  $('.jumbotron').html("<h2 class=\"blue-font\">Stay Tuned For Our Library Updates</h2>");
  this.webStorageInit();
  this.populateTable();
}

function startLibrary(libraryInstance){
  //testing of addBook and addbooks, etc
  var p1 = new Book("the sun", "Brothis", 30 , new Date(2017, 5, 24));
  var p2 = new Book("the river", "Rudland", 28, new Date(2017, 5, 24));
  var p3 = new Book("the sea", "Colmenares", 67, new Date(2017, 5, 24));
  var pCollection = [p1, p2, p3];
  libraryInstance.addBook(p1);
  libraryInstance.addBook(p2);
  libraryInstance.addBook(p3);
  var bookEntry1 = new Book("the rainbow", "Brothis", 30, new Date(2017, 5, 24));
  var bookEntry2 = new Book("the unicorn", "Rudland", 28, new Date(2017, 5, 24));
  var bookEntry3 = new Book("the sea", "gomez", 67, new Date(2017, 5, 24));
  var variousBooks = [bookEntry1, bookEntry2, bookEntry3];
  libraryInstance.addBooks(variousBooks);
  var bookEntry11 = new Book("Windows", "Microsoft", 30, new Date('03/25/2015'));
  var bookEntry21 = new Book("door to nowhere", "Smith", 28, new Date('Mar 25 2015'));
  libraryInstance.addBook(bookEntry11);
  libraryInstance.addBook(bookEntry21);
  //libraryInstance.removeBookByAuthor('rudland');
  //libraryInstance.removeBookByTitle('the sea');
  //console.log(libraryInstance.getBooksByAuthor('r').toString());
  //console.log("Showing all authors: ");
  //libraryInstance.getAuthors();
}

$(document).ready(function(){
  var newLibrary = new Library();
  newLibrary.init();
  newLibrary.bindEvents();
  startLibrary(newLibrary);
  newLibrary.webstorageStore();
  newLibrary.populateTable();
}); //end of document ready
