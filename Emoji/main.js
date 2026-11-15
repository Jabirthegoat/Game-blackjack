/* 
Quiz 7: EmojiFighter

1. When the user clicks on the "pick Fighters" button, pick two 
   random emoji fighters and display them as i.e "🦂 vs 🐯" in the "stage" <div>
*/

let fighters = ["🐯", "🐵", "🐘", "🐍", "🤖" , "🐸" , "🐺"]

 let stage = document.getElementById("stage")
//  let emojiBtn = document.getElementById("emji-btn")
//  console.log(emjiBtn);

 function emoji(){
    let fighter1 = Math.floor( Math.random() * fighters.length)
    let fighter2 = Math.floor( Math.random() * fighters.length)

    stage.innerHTML = fighters[fighter1] + "vs " + fighters[fighter2]
 }
 emoji()