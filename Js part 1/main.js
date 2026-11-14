// //Reassigning and incrementing
// let name = 'Jabir';
// // console.log(name);
// name = 'Muhammad'

// document.getElementById('counter').innerHTML =10;


// let bonusPoint = 15;
// console.log(bonusPoint);

// bonusPoint = bonusPoint + 15;

// console.log(bonusPoint);

// bonusPoint = bonusPoint - 50;
// console.log(bonusPoint);

// bonusPoint = bonusPoint + 70;
// console.log(bonusPoint);

// // Writing code with function

// function race() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }

// race()



// race()
// let lap1 = 34;
// let lap2 = 34;
// let lap3 = 36;
// function lapjabir() {
//     console.log(lap1+lap2+lap3)
// }
// lapjabir


// let lapscompleted= 100;

// function decrement() {
//     lapscompleted /=3;
//     console.log(lapscompleted)
// }   

// psedo code
// Task 2 intalize the count as 100 
// listen for clicks on the decrement button
// decrement the count variable when the button is clicked by 2
let countEl = document.getElementById('counter')

let numberCount = 0;


function lapsIncrement() {
    numberCount += 1
   countEl.textContent = numberCount 

}

let countEls = document.getElementById('counter')
let saveE

let numberCounter = 0;

function decrement() {
    numberCount -= 1
   countEl.innerHTML = numberCount
}

function save() {
    console.log(numberCount)
}
function reset() {
    numberCount = 0;
    countEl.innerHTML = numberCount
}

// let SaveEl = document.getElementById('save-el')

function save() {
// console.log( save)

countEl.textContent = 0
numberCount = 0 
}



/* 
Lesson 12: Create a paragraph with an id of save-el
1. Grab the save-el paragraph and store it in a variable called saveEl
2. Create a variable that contains both the count and the dash separator i.e "12-15-"  
3. Render the variable in the saveEL using innterText
NB: make sure to not delete the existing content of the paragraph
*/
let saveEl = document.getElementById('save-el')