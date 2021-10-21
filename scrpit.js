document.body.innerHTML =   `

<section id = "booksContainer" class="container">
  <h1><i class="fas fa-book "></i> List of Books </h1>
  <div id="bookList" class="row">
  </div>
  <h1 class= "mt-4">List of characters</h1>
  <div id="characterList" class="row mt-3">
  </div>
</section>`

async function getAllBooks(){
  const data = await fetch("https://www.anapioficeandfire.com/api/books?pageSize=30");
  const books = await data.json();
  console.log(books)

  const bookList = document.querySelector("#bookList");

  books.forEach((book) => {
    bookList.innerHTML += `
    <div class="col-12 col-sm-6 col-md-6 col-xl-4">
    <div class="list-item">
      <h3><strong>${book.name}</strong></h3>
      <p><b>Author:</b> ${book.authors}</p>
      <p><b>isbn:</b> ${book.isbn}</p>
      <p><b>Number of pages:</b> ${book.numberOfPages}</p>
      <p><b>publisher-name:</b> ${book.publisher} </p>
      <p><b>release date:</b> ${book.released}</p>
    </div>
  </div>
   ` 
  });
}

getAllBooks()


async function getAllcharacters() {
  const Data = await fetch("https://anapioficeandfire.com/api/characters?pageSize=9")
  const characters = await Data.json()
  console.log(characters)

  const characterList = document.querySelector("#characterList");
  characters.forEach((character) => {
    characterList.innerHTML += `
    <div class="col-12 col-sm-6 col-md-4">
    <div class="list-item">
      <p><b>Name of Aliases:</b> <i> ${character.aliases}</i></p>
      <p><b>Name of Gender:</b> <i> ${character.gender}</i></p>
      
    </div>
  </div>
   ` 
  });

}

getAllcharacters()