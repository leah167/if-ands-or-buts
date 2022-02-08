const prompt = require('prompt-sync')();

const pinCode = Number (2022);

let passcode = Number(prompt('Enter passcode: '));

if (passcode === pinCode) {
    console.log("success")
} else (console.log("failure"))

