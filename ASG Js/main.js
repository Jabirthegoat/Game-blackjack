let welcomeEl = document.getElementById("welcomeEl")
// console.log(welcomeEl)

let user = "My dear customer"
let notification = "Something went wrong please try again"

function notify() {
let message = user + ", " + notification
// console.log(message)
welcomeEl.innerText = message
}