// RECAP
//    - Arrays
//    - Objects
//    - Booleans
//    - If else statements
//    - Comparism operators
//    - Logical operators
//    - for loops
//    - The Math object
//    - The return statement
//    - DOM manipulation
/* 
Quiz 1: Objects and functions

1. Create a person object that contains three keys; name. age and country
2. Use yourself as an example to set the values for name, age and the country.

3. Create a function, logData(), that uses the person object to create a string in the 
   following format: "Coach Imran is 35 years old and lives in Nigeria"

 4. Call the logData() to verify that it works
*/

let obj = {
    name: "Jabir ",
    age: 12,
    country: "Nigeria ",

}
console.log(obj)
function logData(){
   console.log(obj.name + "is " + obj.age + " I lived in " + obj.country);
}
logData()

/* 
Quiz 2: If else

 1. Create a conditional statement (if/else/else if) that logs out the discount the 
    passenger will get based upon the value of the age variable

 - less than 6 years old   ->  free
 - 6 to 17 years old       -> child discount
 - 18 to 26 years old      -> student discount
 - 27 to 66 years old      -> full price
 - over 66 years old       -> senior citizen discount
*/

// let age = 65

// if (age < 6){
//     console.log("free")
// } else if ( age <= 18){
//     console.log("child discount");
// } else if (age < 27){
//     console.log("student discount")
// } else if (age <67){
//     console.log("full price")
// } else {
//     console.log("senior citezen discount")
// }


