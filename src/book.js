function createTitle(bookTitle) {
// return "The Storm's Awakening"
return `The ${bookTitle}`
}

function buildMainCharacter(name, age, pronouns) {
var newCharacter = {
  name: name,
  age: age,
  pronouns: pronouns,
}
return newCharacter
}

// can remove line 11 and replace line 6 with return {}
function saveReview(firstReview, reviews) {
  var isReviewsInArray = reviews.includes(firstReview)
      if(isReviewsInArray === false) {
      reviews.push(firstReview)
    }
}
function calculatePageCount(bookTitle) {
  return bookTitle.length * 20;
  }
// var count = 0
//  for(i = 0; i < bookTitle.length; i +=1) {
//   count += 20
// }

function writeBook(bookTitle, bookCharacterMain, genre) {
  var newBook = {
    title: bookTitle,
    mainCharacter: bookCharacterMain,
    pageCount: calculatePageCount(bookTitle),
    genre: genre
  }
  return newBook
}

function editBook(anotherBook) {
  anotherBook.pageCount = anotherBook.pageCount * .75
}


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
