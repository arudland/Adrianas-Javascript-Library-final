function showAddMultipleBooks(){
  var addBooksDiv = document.getElementById('multiple-books-table-div');
  if (addBooksDiv.style.display == "none"){
    addBooksDiv.style.display = "block";
  }else{
    addBooksDiv.style.display = "none";
  }
}

function showAuthors(){
  var authorsDiv = document.getElementById('show-authors-table-div');
  if (authorsDiv.style.display == "none"){
    authorsDiv.style.display = "block";
  }else{
    authorsDiv.style.display = "none";
  }
}

function displayRandomBook(){
  var book = newLibrary.getRandomBook();
  var randombook = document.getElementById('random-book');
  randombook.value = book.title;
}

function displayRandomAuthor(){
  var book = newLibrary.getRandomAuthorName();
  var randombook = document.getElementById('random-book');
  randombook.value = book;
}

function displayBookByAuthor(){
  var bookinput = document.getElementById('get-book-by-input');
  console.log('test of book: ' + JSON.stringify(bookinput.value));
  var book = newLibrary.getBooksByAuthor(bookinput.value);
  console.log('test of book: ' + JSON.stringify(book));
  bookinput.value = book.toString();
}
function displayBookByTitle(){
  var bookinput = document.getElementById('get-book-by-input');
  console.log('test of book: ' + JSON.stringify(bookinput.value));
  var book = newLibrary.getBookByTitle(bookinput.value);
  console.log('test of book: ' + JSON.stringify(book));
  bookinput.value = book.toString();

}


function remBookByAuthor(){
  var bookinput = document.getElementById('remove-book');
  console.log('remBookByAuthor: ' + bookinput.value);
  newLibrary.removeBookByAuthor(bookinput.value);
  populateTable();
}

function remBookByTitle(){

  var bookinput = document.getElementById('remove-book');
  console.log('remBookByTitle: ' + bookinput.value);
  newLibrary.removeBookByTitle(bookinput.value);
  populateTable();
}

function populateTable(){
  var libTable = document.getElementById('library-table');
  //console.log('libTable: ' + libTable);
  var tableElements = "<tr><th>Title</th><th>Author</th><th>Pages</th><th>Publish date</th></tr>";
  for (var i = 0;  i < newLibrary.books.length; i++) {
    tableElements += "<tr><td>" + newLibrary.books[i].title + "</td><td>" + newLibrary.books[i].author;
    tableElements += "</td><td>" + newLibrary.books[i].numberOfPages + "</td><td>" + newLibrary.books[i].publishDate.substring(0, 10);
    tableElements += "</td></tr>";
  }
  document.getElementById("library-table").innerHTML = tableElements;
}
