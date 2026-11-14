// let myName = "Jabir"
// my name = "ade"
// console.log(myName)
// Lesson 11: Display the Cards
// 1. Store the cards paragraph in a variable called cardsEl
// 112. Render the cards on the page using this format "Cards: 4 5"


// Lesson 12: Add to the sum when new card is clicked
// Step1. Create another function called newCard(), then log out the message Drawing a new card on the
// deck!"
// step2. Create a card variable and hard code its value to a number 2-11
// step3. Add the new card to the sum variable
// step4. Call startgame function/

// Lesson 7: Add the message variable
// 1. Declare a variable called message and assign its value to an empty string
// 2. Reassign the message variable to the string we're logging out
// 3. then log out the message itself bellow the conditional statement.


/* 
Lesson 18: Assign values in the startGame function

 1. isAlive = true
 2. Generate two random numbers
 3. Re-assign the cards and sum variables so that the game can start

*/
 


/* 
Lesson 19: Only trigger newCard() if you're allow to

1. Only allow the player to get a new card if she IS alive and does NOT have Blackjack 
   i.e if isAlive is true and if hasblackjack is false
   */
// let newGames = 0
// let firstCard = getRandomCard()
// let secondCard = getRandomCard()
// let firstCard =  getRandomCard()
// let secondCard =  getRandomCard()

/* 
Lesson 16: Object intro

1. Create a paragraph with an id of "player-el"
2. Create the player object. Give it two keys, name and chips and set their values.
3. Grab ahold of player-el paragraph and store it in a variable called playerEl
4. Render the player's name and chips in playerEl
*/
let sum = 0
let cards = [] 
let message = ""

let hasBlackjack = false
let isAlive = false
let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

let playerName = "Jabir"
let playerChips = 145

let playerEl = document.getElementById("player-el")
playerEl.textContent = playerName + ":  $" + playerChips + " " + player.country

// 2. if 1     ->  return 11
//    if 11-13  -> return 10  
function getRandomCard() {
    let randomNumber =  Math.floor(Math.random() * 13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if(randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
     isAlive = true
     let firstCard =  getRandomCard()
     let secondCard =  getRandomCard()
     cards = [firstCard, secondCard]
     sum = firstCard + secondCard

    renderGame()
}


function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }


    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card? ";
    } else if (sum === 21) {
        message = "You've got Balckjack! ";
        hasBlackjack = true
    } else {
        message = "You're out of the game! ";
        isAlive = false
    }

    messageEl.textContent = message
}


function newCard() {
// 3. Then use the getRandomCard() to set the value of card as well
  if (isAlive === true && hasBlackjack === false){
     let card =  getRandomCard()
    sum += card
    
    cards.push(card)
    // console.log(cards);
    
    renderGame()
   }    
}