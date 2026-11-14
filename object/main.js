//  introo to obj

// let profile = {
//     name: "Jabir",
//     age: 12,
//     grade: 7,
//     country: "Canada",
//     items: ["bag", "shoe", "toothpaste" , 100]

// }

//     console.log(profile);




//     let him = {
//         name: "Messi",
//         age: 39,
//         team : "Intermiaami",   
//         country : "Argentina"

//     }

//     console.log(him )
// datatype are boolean number and string
let users = {
    name: "Jabir",
    age:15,
    country: "Nigeria",
    isAdmin: true,
    sayHello: function(){
        console.log("I am" + users.name + " I am " + users.age + "I lived in " + users.country);
    }

}

console.log(users)
users.sayHello()

// Array of obj

let profile = [
{id: 1, name: "Jabir", age: 12, country: "Nigeria"},
{id: 2, name: "Muhammad", age: 8, country: "America"},
{id: 3, name: "Summayyah", age: 10, country: "Lagos,Nigeria"},
{id: 4, name: "Bello", age: 12, country: "Canada"}
]

console.log(profile)
 

// Acess the data with an id of 3

/* 
Challenge: Create your first object
1. Create an object that represent an airbnb castle listing.
2. It should contain at least one boolean, one string, one number, and one array
3. Log out at least two of the keys using the dot notaion.
*/


let airnob = {
   name: "Jabir",
    age: 12,
    grade: 7,
    country: "Canada",
    items: ["bag", "shoe", "toothpaste" , 100],
     isAlive  : false
}

console.log(airnob.country)