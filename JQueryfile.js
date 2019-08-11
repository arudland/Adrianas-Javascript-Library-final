
/*$('#getbook-button-title').on('click',this.displayBookByTitle());
$('#getbook-button-author').on('click', displayBookByAuthor());
$('#remove-button-title').on('click', remBookByTitle());
$('#remove-button-author').on('click', remBookByAuthor());
$('#Random-button-title').on('click', displayRandomBook());
$('#Random-button-author').on('click', displayRandomAuthor());
$('#addbook-button').on('click', addBookUser());
$('#multiple-books-button').on('click', showAddMultipleBooks());
$('#add-multiple-books-button').on('click', addMultipleBooks());
//$('#addMore-No-Button').on('click',);
//$('#addMore-Yes-Button').on('click',);
$('#list-authors-button').on('click', showAuthors());*/
//below working on it

//function displayBookByAuthor(){
/*Library.prototype.displayBookByAuthor = function(){
  //var bookinput = document.getElementById('get-book-by-input');
  var bookinput = $('#get-book-by-input').val();
  //console.log('test of book: ' + JSON.stringify(bookinput.value));
  console.log('test of book: ' + JSON.stringify(bookinput));
  //var book = newLibrary.getBooksByAuthor(bookinput.value);
  var book = this.getBooksByAuthor(bookinput);
  console.log('test of book: ' + JSON.stringify(book));
  $('#get-book-by-input').val(book.toString());//don't know how to change this
  $('.jumbotron').html("<h2>" + "We found these titles: " + book.toString() + "</h2>");
}*/
//Library.prototype.
//function displayBookByTitle(){
/*Library.prototype.displayBookByTitle = function(){
  //var bookinput = document.getElementById('get-book-by-input');
  console.log('I got to the function fine.....');
  var bookinput = $('#get-book-by-input').val();
  //console.log('test of book: ' + JSON.stringify(bookinput.value));
  console.log('test of book: ' + JSON.stringify(bookinput));
  //var book = this.getBookByTitle(bookinput.value);
  var book = this.getBookByTitle(bookinput);
  console.log('test of book: ' + JSON.stringify(book));
  $('#get-book-by-input').val(book.toString());//don't know how to change this
  $('.jumbotron').html("<h2>" + "We found these titles: " + book.toString() + "</h2>");

}*/
//function displayRandomBook(){
/*Library.prototype.displayRandomBook = function(){
  var book = this.getRandomBook();//
  var randombook = book.title;
  $('.jumbotron').html("<h2>" + "We selected this title: " + randombook + "</h2>");
  //$('.jumbotron').html("<h2>Hello world!</h2>");
  //ToDo display in jumbotron the book selected, the two lines below are not necessary?
  //var randombook = document.getElementById('random-book');
  //randombook.value = book.title;
}*/

//function displayRandomAuthor(){
/*Library.prototype.displayRandomAuthor = function(){
  var author = this.getRandomAuthorName();
  $('.jumbotron').html("<h2>" + "We selected this author: " + author + "</h2>");
  //ToDo display in jumbotron the book selected, the two lines below are not necessary?
  //var randombook = document.getElementById('random-book');
  //randombook.value = book;
}*/

//function remBookByAuthor(){
/*Library.prototype.remBookByAuthor = function(){
  //var bookinput = document.getElementById('remove-book');
  var bookinput = $('#remove-book').val();
  //console.log('remBookByAuthor: ' + bookinput.value);
  console.log('remBookByAuthor: ' + bookinput);
  //this.removeBookByAuthor(bookinput.value);
  var result = this.removeBookByAuthor(bookinput);
  $('.jumbotron').html("<h2>" + "We removed books by this author: " + (result?bookinput:'') + "</h2>");
  populateTable();
}*/

/*Library.prototype.remBookByTitle = function(){
  //var bookinput = document.getElementById('remove-book');
  var bookinput = $('#remove-book').val();
  //console.log('remBookByTitle: ' + bookinput.value);
  console.log('remBookByTitle: ' + bookinput);
  //this.removeBookByTitle(bookinput.value);
  var result = this.removeBookByTitle(bookinput);
  $('.jumbotron').html("<h2>" + "We removed this book: " + (result?bookinput:'') + "</h2>");
  populateTable();
};*/
//function addBookUser(){
/*Library.prototype.addBookUser = function(){
  var bookinput1 = $('#addbook-title').val();
  var bookinput2 = $('#addbook-author').val();
  var bookinput3 = $('#addbook-pages').val();
  var bookinput4 = $('#addbook-date').val();
  var bookAdd = new Book(bookinput1,bookinput2,bookinput3,bookinput4);
  //this part in if, for no more books to add
  var addBookvalue = this.addBook(bookAdd);
  populateTable();
  $('.jumbotron').html("<h2>" + (addBookvalue?'Books successfully added':'Failed to add book') + "</h2>");
}*/
//function anadirUnLibroOMasLibros(){
/*Library.prototype.anadirUnLibroOMasLibros = function (){//mi logica nueva
  addBookUser(); //until before populate, just creates the new book
  $('#addMore-No-Button').On('click',this.addBook(bookAdd));//A function that calls addbook and populateTable
  populateTable(); //this is the library state at the end of adding
  //to do make the table with inputs hide division with id=? hide or whatever

  $('#addMore-Yes-Button').On('click',this.addBooks(bookAdd));//call function that :
  //while user keeps pushing YES
    //increase a counter
    //displays another table row to enter another book
    //create the object
    //push to arrays
  //call this.addbooks(array)
  //make table disapear
}*/
/*function addBookUser(){ //esta copia funciona bien 12/12, estoy cambiandolo arriba y quice dejar esta porsiacaso
  var bookinput1 = $('#addbook-title').val();
  var bookinput2 = $('#addbook-author').val();
  var bookinput3 = $('#addbook-pages').val();
  var bookinput4 = $('#addbook-date').val();
  var bookAdd = new Book(bookinput1,bookinput2,bookinput3,bookinput4);
  var addBookvalue = newLibrary.addBook(bookAdd);
  populateTable();
  $('.jumbotron').html("<h2>" + (addBookvalue?'Books successfully added':'Failed to add book') + "</h2>");
}*/


/*function addMultipleBooks(){
  var bookinput1 = $('#multiple-input-title1').val();
  var bookinput2 = $('#multiple-input-author1').val();
  var bookinput3 = $('#multiple-input-pages1').val();
  var bookinput4 = $('#multiple-input-publishdate1').val();
  var bookAdd1 = new Book(bookinput1,bookinput2,bookinput3,bookinput4);
  var bookinput5 = $('#multiple-input-title2').val();
  var bookinput6 = $('#multiple-input-author2').val();
  var bookinput7 = $('#multiple-input-pages2').val();
  var bookinput8 = $('#multiple-input-publishdate2').val();
  var bookAdd2 = new Book(bookinput5,bookinput6,bookinput7,bookinput8);
  var bookinput9 = $('#multiple-input-title3').val();
  var bookinput10 = $('#multiple-input-author3').val();
  var bookinput11 = $('#multiple-input-pages3').val();
  var bookinput12 = $('#multiple-input-publishdate3').val();
  var bookAdd3 = new Book(bookinput9,bookinput10,bookinput11,bookinput12);
  var multipleBooksArray = [bookAdd1,bookAdd2,bookAdd3];
  var addBookvalue = newLibrary.addBooks(multipleBooksArray);
  populateTable();
  $('.jumbotron').html("<h2>Successfully added " + addBookvalue + " books</h2>");
}*/


/*Library.prototype.populateTable = function(){
  //var libTable = $('library-table').val();// WHat happens if table doesn't exist? document.getElementById('library-table');
  //console.log('libTable: ' + libTable);
  var tableElements = "<tr><th>Title</th><th>Author</th><th>Pages</th><th>Publish date</th></tr>";
  for (var i = 0;  i < this.books.length; i++) {
    tableElements += "<tr><td>" + this.books[i].title + "</td><td>" + this.books[i].author;
    tableElements += "</td><td>" + this.books[i].numberOfPages + "</td><td>" + this.books[i].publishDate.toString().substring(0, 10);
    tableElements += "</td></tr>";
  }
  //$("#test2").html("<b>Hello world!</b>");
  $("#library-table").html(tableElements);*/
  //document.getElementById("library-table").innerHTML = tableElements;

  //under this is the original code
  /*var libTable = document.getElementById('library-table');
  //console.log('libTable: ' + libTable);
  var tableElements = "<tr><th>Title</th><th>Author</th><th>Pages</th><th>Publish date</th></tr>";
  for (var i = 0;  i < newLibrary.books.length; i++) {
    tableElements += "<tr><td>" + newLibrary.books[i].title + "</td><td>" + newLibrary.books[i].author;
    tableElements += "</td><td>" + newLibrary.books[i].numberOfPages + "</td><td>" + newLibrary.books[i].publishDate.substring(0, 10);
    tableElements += "</td></tr>";
  }
  document.getElementById("library-table").innerHTML = tableElements;*/
//}

//function showAddMultipleBooks(){
/*Library.prototype.showAddMultipleBooks = function(){
  var addBooksDiv = $('#multiple-books-table-div');//document.getElementById('multiple-books-table-div');
  if (addBooksDiv.css("display") == "none"){
    addBooksDiv.css("display", "block");
  }else{
    addBooksDiv.css("display", "none");
  }
}

 Library.prototype.showAuthors = function(){
  var authorsDiv = $('#show-authors-table-div');
  if (authorsDiv.css("display") == "none"){
    authorsDiv.css("display", "block");
    var arrayAuthors = this.getAuthors();
    var tableElements = "<tr><th>Author</th></tr>";
    for (var i = 0;  i < arrayAuthors.length; i++) {
      tableElements += "<tr><td>" + arrayAuthors[i];
      tableElements += "</td></tr>";
    }
    //$("#test2").html("<b>Hello world!</b>");
    $("#show-authors-table-div").html(tableElements);
  }else{
    authorsDiv.css("display", "none");
  }
}

$(document).ready(function(){
  newLibrary.populateTable();
  console.log("I populated table");
  //$('#getbook-button-title').on('click',($.proxy(Library, this.displayBookByTitle)));//click($.proxy(objPerson, "test"));
  /*$('#getbook-button-title').on('click',function(){
        $('.jumbotron').html("<h2>" + "the click works" + "</h2>");
    });*///click($.proxy(objPerson, "test"));
   // jQuery methods go here...


   //$('jumbotron').text('this is a test of writing in jumbotron');
   //$("#remove-button-title").click(remBookByTitle());
   //$("#remove-button-author").click(remBookByAuthor());

   //newLibrary.removeBookByTitle(bookinput.value)

//}); //end of document ready
/***************WORK IN PROGRESS*************/
/*var $newRow = $("#addbooks-table").find('tbody')
.append($('<tr>')
  .append($('<td>')
    .append($('<input>').attr('id', 'someInputTitle').attr('size', '30').attr('type', 'text'))
      .append($('</td>'))
    )
  )
);
var $newcell1 = $("#addbooks-table").find('tbody')
  .append($('<td>')
    .append($('<input>').attr('id', 'someInputauthor').attr('size', '20').attr('type', 'text'))
      .append($('</td>'))
    )
  );
var $finalCell = $("#addbooks-table").find('tbody')
  .append($('<td>')
    .append($('<input>').attr('id', 'someInputdate').attr('size', '4').attr('type', 'text'))
      .append($('</td>'))
        .append($('</tr>'))
    )
  );*/

  /*var multiRowCount = 1;

  Then, when they bonk the button to add a new row, you call something like this (untested, but you can do that) :

  $("#addbooks-table > tbody:last-child")
  	.append('<td><input id=\"multiple-input-title'+  ++multiRowCount + '\" size=\"30\" type=\"text\"></td>')
  	.append('<td><input id=\"multiple-input-author' + multiRowCount + '\" size=\"20\" type=\"text\"></td>')
  	.append('<td><input id=\"multiple-input-pages' + multiRowCount + '\" size=\"4\" type=\"text\"></td>')
  	.append('<td><input id=\"multiple-input-publishdate' + multiRowCount + '\" size=\"4\" type=\"text\"></td></tr>');

//$("#addbooks-table").find('tbody').append($('<tr><td>')

'<input id="multiple-input-title1" type="text" size="30"></td>
  <td><input id="multiple-input-author1" type="text" size="20"></td>
   <td><input id="multiple-input-pages1" type="text" size="4"></td>');
   <td><input id="multiple-input-publishdate1" type="text" size="4"></td></tr>'));


//$('#addMore-Yes-Button').On('click',this.addingRowsAddBooks());//call function that :
//while user keeps pushing YES
  //var bookCounter++; //increase a counter
  //displays another table row to enter another book (addbooks-table append another row)
  var anotherBookTableElements =
  <tr><td><input id="multiple-input-title1" type="text" size="30"></td>
    <td><input id="multiple-input-author1" type="text" size="20"></td>
    <td><input id="multiple-input-pages1" type="text" size="4"></td>
    <td><input id="multiple-input-publishdate1" type="text" size="4"></td>
  </tr>
  $('#addbooks-table > tbody:last-child').append('<tr>...</tr><tr>...</tr>');
//testing another way
//  $("#addbooks-table").find('tbody').append($('<tr>').append($('<td>')
//    .append($('<input>').attr('id', 'someInputTitle').attr('size', '30').attr('type', 'text')).append($('</td>'))));

  $("#addbooks-table").find('tbody').append($('<td>')
          .append($('<input>').attr('id', 'someInputAuthor').attr('size', '20').attr('type', 'text')));
  $("#addbooks-table").find('tbody').append($('<tr>').append($('<td>')
          .append($('<input>').attr('id', 'someInputpages').attr('size', '4').attr('type', 'text'))));
  $("#addbooks-table").find('tbody').append($('<tr>').append($('<td>')
          .append($('<input>').attr('id', 'someInputdate').attr('size', '4').attr('type', 'text'))));
  //create the object
  //push to arrays
  //end while
//call this.addbooks(array)
//make table disapear*/
