// Lesson 3 -   Array methods:
// 1.Array.push()
// 2. Array.pop()

// 1.Create a crd array
// 2. Add a number to the Array
// 3. Remove the last item of the Array

// 4. Add a new number to the begining
// 5. Removing the first item of the Array
// 6. To extract an item from the array

/* 
Lesson12: New card buttton
1. Create a NEW CARD button, make it run a newCard()
2. Create a newCard() and make it log out the message "Drawing a new card on the deck!"

Lesson 13: Add to sum when newCard is clicked

1. Create a card variable, and hard code its value to a number netween(2-11)
2. Add the new card to the sum variable
3. Call startGame() 
*/x
// 1. Create an array  of the numbers
let crd = [2, 3, 5, 7]
// 2. Adding a new number to the Array
crd.push(9)
console.log(crd)
// 3. Removing the last items of the Array


crd.pop()
console.log(crd)

// 4. Adding a new number to the begining of an array
crd.unshift(1)
console.log(crd)

// 5. Removing the first item of the array
crd.shift()
console.log(crd)

// 6. To extrast an item from an array