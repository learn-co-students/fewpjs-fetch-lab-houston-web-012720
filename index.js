function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(response => response.json())
  .then(json => renderBooks(json)); // why not return here and call renderBooks(fetchBooks()) in dom load event listener?
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => { // cannot use .forEach on json?
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  // let books = fetchBooks();
  // debugger
  // renderBooks(books);
  fetchBooks();
})
