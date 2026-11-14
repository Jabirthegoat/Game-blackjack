let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')

let firstCard = 12
let secondCard = 10
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let message = ""


function newcard(){
  renderGame()  
}

function renderGame (){  
   
    // cardsEl.textcontent = 'card:'+ firstCard + " " + secondCard
    cardsEl.textContent = 'card:'+ firstCard + " " + secondCard
    sumEl.textContent = 'sum :' + sum  
    if (sum <= 20) {
    message = "Do you want to draw a new card? 😂"
    
}else if (sum ===20){
    message = "Wohoo! You've got blacjack! 😏" 
    hasBlackjack = true
}else {
    message = "You have a new card"
    isAlive = false

    // console.log("You're out of the game 😆")
}

messageEl.textContent = message


}



function newCard(){
    console.log("Drawing a new card out of the deck")
    let card = 9
    sum += card
    startGame()
    
}
