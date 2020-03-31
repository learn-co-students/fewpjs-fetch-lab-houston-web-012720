function fetchBooks(){
  // return fetch('https://anapioficeandfire.com/api/books')
  // .then(function(response){
  //    return response.json();
  // }) .then(function(json){
  //   // console.log(json)
  //   renderBooks(json)
  // })

  return fetch ('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks(json))
}

// debugger
function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}



document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})

// function getPosts(){
//   renderBooks(fetchBooks())
//   // fetchBooks().renderBooks
// }

// getPosts()

