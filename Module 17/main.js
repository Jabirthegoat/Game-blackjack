


// let getRandomNumber = Math.random() *6


// let getRandomNumber = Math.floor(Math.random() *6)+1

// console.log(getRandomNumber);

/* 
Challenge:

Create a function, rollDice(), that returns a random number between 1 - 10
*/
function dice () {
  return Math.floor(Math.random() *10)+1 ;
}

console.log(dice(1, 10)); // Generates a number from 1 to 10