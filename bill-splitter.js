const prompt = require('prompt-sync')();

let total = Number(prompt('Enter bill total: '));
let Person1 = Number(prompt('Amount Person 1 paid: '));
let Person2 = Number(prompt('Amount Person 2 paid: '));

if (Person1 - Person2 === 0) {
    console.log("Bill is split evenly")
} else if ((Person1 - Person2) >= 0) {
    let result = ((total/2) - Person2)
    console.log("Person 2 owes Person 1 " + result + " dollars. ")
} else if ((Person1 - Person2) <= 0) {
    let result = ((total/2) - Person1)
    console.log("Person 1 owes Person 2 " + result + " dollars. ")
}