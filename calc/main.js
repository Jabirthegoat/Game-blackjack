let display = document.getElementById("display")

function operate(sigma){
//    console.log(sigma) 
display.value += sigma

}
// operate('Sigma_isagi4')
function calculate(name) {
    display.value = eval(display.value)

}

function cleardisplay (name) {
    display.value = ''
}


function add(arg1, arg2) {
    console.log(arg1 + arg2)
}

add(3,5)  

// add 2, 4 , 6 , and 8 together 
// log out your answer in the browser

// function add () {
// console.log(2+4+6+8)
// }
function getAverage(num1, num2, num3, num4) {
    // console.log(num1 + num2 + num3 + num4) ;
    let sum = num1 + num2 + num3 + num4
    return sum / 4
}
let result = getAverage(2, 4, 6, 8)
console.log(result)