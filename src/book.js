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
// function calculatePageCount() {
//   var book = ;
//   var addPages = ;
//   for ( var i = 0; i < bookPageCount.length; i+20) {
// console.log(calculatePageCount[i])
//   }
//   //this should print out 340, "Teenage Ghoul" = 13 x 20 = 260
//   // "The Teenage Ghoul" = 17 x 20 = 340
// }

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}
