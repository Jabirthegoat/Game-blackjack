
/* 
Task:
1. Create two variables name and greeting, The name variable should store your name, and the greeting should store e.g "Hi, my name is "
2. Create a third variable, myGreeting, that concatenates the two strings.
3. Log myGreeting to the console.
*/
let name = "Jabir";
let date = "March 14 2014 ";
let myGreeting = date + name;
console.log(myGreeting)


/* 
Challenge:
console.log(4 + 5)
console.log("2" + "4")
console.log("5" + 1)
console.log(100 + "100")
*/
console.log(4 + 5)
console.log("2" + "4")
console.log("5" + 1)
console.log(100 + "100")

let wish = "I'd love to see the show of \"The marvel kingdom\"";
console.log(wish)
//  Challenge:
// 1. Grab a welcome-el paragraph and and store it in a variable called welcomeEl
// 2. Create two variables (myName & greetings) that contains your name and the greeting we want to render on the page
// 3. Render the welcome message using welcomeEl.innerText
// */

let greeting = " Hi my name is ";
let myName = "Jabir";
let welcomeEl = document.getElementById("welcome-el");
welcomeEl.innerText = greeting + myName

/* 
1. Add an emoji to the end! 👋
NOTE: WRITE YOUR CODE BELOW HERE
HINT: count = count + 1
*/

/* 
Lesson 15: Improve the message with string concatenation
1. Add an emoji to the end! 👋
NOTE: WRITE YOUR CODE BEOLW HERE
HINT: count = count = 1
*/

welcomeEl.innerText = welcomeEl.innerText+ "👋"

/* 
Lesson 12: Create a paragraph with an id of save-el
1. Grab the save-el paragraph and store it in a variable called saveEl
2. Create a variable that contains both the count and the dash separator i.e "12-15-"  
3. Render the variable in the saveEL using innterText
NB: make sure to not delete the existing content of the paragraph
*/




