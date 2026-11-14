/*
Introduction:

1. Create two variables: firstTest and secondTest.
2. Assign any test scores of your choice (between 0 and 10) to the variables.
3. Create a variable called sum and set it to the total of the two test scores.
4. Display the total score in the console.
*/

/*
Challenge:

Use an if...else statement to check whether the student passed the test.

- The pass mark is 10.
- If the total score is 10 or more, print "You passed!"
- Otherwise, print "You failed."
*/
// let firstTest = 5
// let secondTest =5
//  let hasBlackjack = false


// let sum = firstTest + secondTest
// console.log(sum)

// if (sum >= 10){
//     console.log("You have got blackjack")
//  hasBlackjack = true

// }else{
//     console.log("You are out of the game")
// }


// let name = "Tom" //  string data type
// let herAge = 13  // number data type
// let hasPhone = false // Boolen data type

// console.log(typeof(hasPhone))

// function getItem() {
//     if (hasPhone) {
//         console.log("Get her a new phone")
//     }
// }

// let myOrder = 'burger' //string
// let price = 100

// let hasBag = false //boolean

// console.log (hasBag)

// function makeOrder() {
//     if  (hasBag === true){
//       console.log("The order as been recieved")
      
//     }
// }
/* 
Lesson 4: 
1. Add hasBlackjack variable and set it to false
2. Reassign it to true after you have logged out the message when of sum === 21
3. log it out after all
 */
//Cash out
// let randomNumber = Math.floor(Math.random() * 50)
// console.log(randomNumber)



// let firstCard = Math.floor(Math.random() * 12)
// let secondCard = Math.floor(Math.random() * 50)

// console.log(firstCard)
// console.log(secondCard)
// let sum = firstCard + secondCard 
// console.log(sum)

// if (sum < 20) {
    //     console.log("Do you want to draw a new card? 😂")
    
    // }else if (sum ===20){
        //     console.log ("Wohoo! You've got blacjack! 😏" )
        //     hasBlackjack = true
        
        
        // }else {
            //     console.log("You're out of the game 😆")
            //     isAlive = true
            // }
            // let firstCard = 0
    // let secondCard = 0
    // let hasBlackjack = false
    // let isAlive = false

    // const messageEl = document.getElementById("message-el"); // "You've got blackjack!"
    // const sumEl = document.getElementById("sum-el");         // Displays total sum
    // const cardsEl = document.getElementById("cards-el");     // Displays drawn cards

    


// saveEl.textContent = firstCard + '+' + secondCard
// let sum =firstCard + secondCard
// countEl.textContent = sum



// console.log(messageEl)
// console.log(isAlive)

// Lesson 11: Display the cards
// 1. Store the cards paragraph in a variable call cardsEl
// 2.Render the cards on the page using format "Cards : 4 5"

// Lesson 12:Add to the sum when newCard is clicked
// 1. Create another function newCard(), then log out the message "Drawing a new card"
// 
// 3. Add the new card to sum variable
// 4. Call startGame function







//  hasBlackjack = false
//  isAlive = true

// let firstCard = 10
// let secondCard = 11
// let sum = firstCard + secondCard 
// let message = ""


// let cardsEl = document.getElementById('cards-el')
// let sumEl = document.getElementById('sum-el')
// let messageEl = document.getElementById("message-el")
// function startGame (){  
    
//     cardsEl.textContent = "cards:" + "" + firstCard + " " + secondCard
//     messageEl.textContent = " " + message
//     sumeEl.textContent = "Sum:" + sum;

//     if (sum < 20) {
//     message = "Do you want to draw a new card? 😂"
    
// }else if (sum ===20){
//     message = "Wohoo! You've got blacjack! 😏" 
// }else {
//     message = "You are out of the game"
//     // console.log("You're out of the game 😆")
// }

/* Lesson 15: Working with an array
1. Create a new array -cards- that contains firstcard and secondcard
2. Refer to each card in the array
3. Push the new card to the card array
 */
// let crds = firstCard + secondCard
// console.log(crds)
    // let crds = [firstCard+secondCard]
    // crds[0]
    // crds[1]
    // crd.push(newCard)
let firstCard = 16
let secondCard = 5
let cards = [firstCard , secondCard]
console.log(cards)
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let messageEl = document.getElementById('message-el')
let cardsEl = document.getElementById('cards-el')
let sumEl = document.getElementById('sum-el')
function startGame() {
    renderGame()
}

function renderGame (){  
    
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    sumEl.textContent = "Sum: " + sum

    if (sum < 20) {
    message = "Do you want to draw a new card? 😂"
    
}else if (sum ===21){
    message = "Wohoo! You've got blacjack! 😏" 
}else {
    message = "You have a new card"
    // console.log("You're out of the game 😆")
    isAlive = false
}
// console.log(message)
messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard


}

// function newCard(){
//   let card = 4
//   sum += card
//   startGame()
// }



function newCard(){
  let card = 12*5
  sum+=card
    startGame()
    cards.push(card)
    console.log(card)
    console.log(cards)
}


// function card(){
//      if (isAlive === true && hasBlackjack === false) {
//         let card = getRandomCard();
//         sum += card;
//         cards.push(card);
//         renderGame();  
// }
// }


// function renderGame() {
//     // Display cards array elements as a text string
//     cardsEl.textContent = "Cards: " + cards.join(" ");
    
//     // Display the updated sum
//     sumEl.textContent = "Sum: " + sum;
    
//     // Check conditional game states
//     if (sum <= 20) {
//         message = "Do you want to draw a new card?";
//     } else if (sum === 21) {
//         message = "You've got blackjack!";
//         hasBlackjack = true;
//     } else {
//         message = "You're out of the game!";
//         isAlive = false;
//     }
// }