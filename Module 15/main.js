//
// 1 string concatination
// 2 DOM Manipulation
// 3. Primitive data type (string,number and boolean)
// 4. conditional statement
// 5. Array
// 6. Array methods (push, pop, shift, unshift, splice)
// 7. Loop
//  */
// let num = 10

// // START CONDITON STEP SIZE 
// for ( let i = 0; i < 11; i = i + 1 ){
//     console.log(i)
// }


// Lesson 13 Array and loops

let messages = [
    "Hey,Sup",
    "Nothing much you?",
    "Great! I was just gaming bored",
    "Same here",
    "What game do you want to play",
    "Fortnite",  "🔫"   
]
// console.log(messages)

// console.log(messages[0]); 
// console.log(messages[1]);
// console.log(messages[2]);
// console.log(messages[3]);

// for (let i = 0; i< messages.length; i++){
//     console.log(messages[i])
// }
// Render the sentence in the greetingEl paragraph using for loop and greetingEl.textContent



let sentence = ["Hey ","MY ","Name ","is ","Jabir ", "Lawal"]


let messageEl = document.getElementById("message-el")
for ( let i = 0; i < sentence.length; i++){
    // greetingEL.textContent+= 
    messageEl.textContent += sentence[i]
}




// let greetingEL = document.getElementById(message-el)