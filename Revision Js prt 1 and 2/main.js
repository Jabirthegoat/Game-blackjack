let welcomeEl = document.getElementById("welcome-el")
// console.log(welcomeEl)

let user = "Jabir"
let notification = "You have three new notifications"

function notify() {
let message = user + ", " + notification
// console.log(message)
welcomeEl.innerText = message
}