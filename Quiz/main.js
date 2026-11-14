// /* 
// Quiz 2: If else

//  1. Create a conditional statement (if/else/else if) that logs out the discount the 
//     passenger will get based upon the value of the age variable

//  - less than 6 years old   ->  free
//  - 6 to 17 years old       -> child discount
//  - 18 to 26 years old      -> student discount
//  - 27 to 66 years old      -> full price
//  - over 66 years old       -> senior citizen discount
// */

// let age = 300

// if (age < 6) {
//     console.log ("free")
// } else if (age < 18) {
//    console.log  ("child discount")
// } else if (age < 27){
//     console.log("student discount")
// } else if (age < 67){
//     console.log("Full price")
// } else {
//     console.log("senior citizen discount")
// }

// /* 
// Challenge 3: Loops and arrays

// 1. Use a for loop to log the following to the console:

// The 5 largest countries of the world
// - China
// - India
// - United State
// - Indonisia
// - Pakistan
// */

// const largecountries= [
//   "china",
//   "India",
//   "US",
//    "Indonisia",
//    "pakistani"
// ]


// // for (let i = 0; i < largecountries.length; i++){
// //     console.log (largecountries[i])
// // }
// largecountries.pop()
// console.log(largecountries);
// largecountries.push("pakistani")
// console.log(largecountries)

// largecountries.shift()
// console.log(largecountries)
// largecountries.unshift("china")
// console.log(largecountries)
/* 
Challenge 4: push, pop, unshift, shift challenge

1. You need to help fixup the largeCountries array so that China and Pakistan
   are added back into their respective places

2. Use push() & pop() and their counterparts unshift() & shift()
3. Google how to use unshift() & shift()   
*/


 /* 
Challenge6: Rock papers scissors

1. Create a function that returns a random item from the array
*/

// let items = [
//     "Rock ",
//     "Paper ",
//     "Scissors "
// ]

// function getRandomitm(){
//     let randomItem = Math.floor (Math.random) * item.length
//     return items [items]
// }
// console.log(getRandomItem())


let words = ['Rock', 'Paper', 'Scissors'];

// Get a random index
let randomIndex = Math.floor(Math.random() * words.length);

// Select the word
let randomWord = words[randomIndex];

console.log(randomWord); // e.g., "cherry"