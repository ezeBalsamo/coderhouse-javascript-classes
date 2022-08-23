/*
Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una salida por cada resultado.
*/

let numberOfRepetitions = 5;
let enteredNumber = parseFloat(prompt("Enter a number"));
let firstAddend = enteredNumber;
let secondAddend = 3;

for (let i = 0; i < numberOfRepetitions; i++) {
    let sum = firstAddend + secondAddend;
    console.log(`The sum of ${firstAddend} and ${secondAddend} is ${sum}.`);
    firstAddend = sum;
}
