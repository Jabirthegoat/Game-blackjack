// 
// Aside the logical and operator
// 

let hasCompletedCource = true
let givesCertificate = true

// if (hasCompletedCource === false){
//     if (givesCertificate === true){
//         generateCertificate()
//     }
// }

if(hasCompletedCource === true && givesCertificate === true){
    generateCertificate()
}
function generateCertificate(){
    console.log("Genarate certificate .....");
}
/* 
Challenge: Write your first logical operator

1. Create an if statement that checks that both variables are false.
2. If so, run the showSolution() function
*/

let hasSolvedChallenge = true
let hasHintLeft = true;

if (hasSolvedChallenge === true && hasHintLeft === true){
  showSolution() 
}
function showSolution(){
    console.log("you failed .....");
}



let hasPass = true
let hasGift = true

if(hasPass === false && hasGift === false){
    issueGift()
}
    function issueGift(){
console.log("Get me my gift ");
}




let hasGoodPc = true
let hasBadPc = true

if(hasGoodPc === true || hasBadPc === false)
   getPc()
    function getPc(){
        console.log("You can start coding")
    }




/* 
Challenge:

1. Create two boolean variables, likesDocumentaries and likesStartups
2. Use an OR statement (||) to call recommendMovie() if either of those variables is true
*/

let likesDocumentaries = true
let likesStartups = false

if(likesDocumentaries === true || likesStartups  === false)
 recommendMovie()

function recommendMovie(){
    console.log("your recomended movie")
}