const prompt = require('prompt-sync')();

let total = Number(prompt('Enter bill total: '));

let Person1 = Number(prompt('Amount Person 1 paid: '));
let Person2 = Number(prompt('Amount Person 2 paid: '));
let Person3 = Number(prompt('Amount Person 3 paid: '));

if (Person1 === Person2 && Person1 === Person3) {
    console.log("Bill is split evenly");
} else if ((Person2 <= total/3) && (Person3 <= total/3) && (Person1 > total/3)) {
    let result2 = ((total/3) - Person2);
    let result3 = ((total/3) - Person3);
    console.log("Person 2 owes Person 1 " + result2 + " dollars and Person 3 owes Person 1 " + result3 + " dollars.");
} else if ((Person1 <= total/3) && (Person3 <= total/3) && (Person2 > total/3)) {
    let result1 = ((total/3) - Person1)
    let result3 = ((total/3) - Person3)
    console.log("Person 1 owes Person 2 " + result1 + " dollars and Person 3 owes Person 2 " + result3 + " dollars.")
} else if ((Person1 <= total/3) && (Person2 <= total/3) && (Person3 > total/3)) {
    let result1 = ((total/3) - Person1)
    let result2 = ((total/3) - Person2)
    console.log("Person 1 owes Person 3 " + result1 + " dollars and Person 2 owes Person 3 " + result2 + " dollars.")
} else if ((Person1 >= total/3) && (Person2 >= total/3) && (Person3 < total/3)) {
    let result1 = (Person1 - (total/3))
    let result2 = (Person2 - (total/3))
    console.log("Person 3 owes Person 1 " + result1 + " dollars and Person 3 owes Person 2 " + result2 + " dollars.");
} else if ((Person1 >= total/3) && (Person3 >= total/3) && (Person2 < total/3)) {
    let result1 = (Person1 - (total/3))
    let result2 = (Person3 - (total/3))
    console.log("Person 2 owes Person 1 " + result1 + " dollars and Person 2 owes Person 3 " + result2 + " dollars.");
} else if ((Person2 >= total/3) && (Person3 >= total/3) && (Person1 < total/3)) {
    let result1 = (Person2 - (total/3))
    let result2 = (Person3 - (total/3))
    console.log("Person 1 owes Person 2 " + result1 + " dollars and Person 1 owes Person 3 " + result2 + " dollars.");
    
}

// x+y+z=total
// x=total-y-z
// y=total-x-z
// z=total-x-y