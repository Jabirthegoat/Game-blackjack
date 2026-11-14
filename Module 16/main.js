// 
// Aside
// 

let test1 = 40
let test2 = 30

function total (){
    return test1 + test2;
}
 let result = total()
 console.log(result);
 

 let player1Time = 200
 let player2Time = 203

 function getRaceTime(){
    if(player1Time < player2Time){
    return player1Time;
    } else if(player2Time < player1Time){
     return player2Time;
 }else{
    return player1Time;
 }
}
let playerResult = getRaceTime()
console.log(playerResult)


/* 
Challenge: 
1. Write a function that returns the total race time
2. Call/invoke the function and store the returned value in a new variable
3. Finally, log the variable out
*/

function totalRacetime(){
    return player1Time + player2Time
}

let resume = totalRacetime()
console.log(resume)
