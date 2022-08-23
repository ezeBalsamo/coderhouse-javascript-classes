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

/*
Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingresa “ESC”.
*/

let text = prompt("Enter a text to be concatenated");
let finalText = text;
let textToConcat = prompt("Enter a text to concatenate at the end");

while (textToConcat !== "ESC") {
    finalText = `${finalText} ${textToConcat}`;
    console.log(finalText);
    textToConcat = prompt("Enter a text to concatenate at the end");
}

/*
Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces ingresada.
*/

let numberOfTimes = parseInt(
    prompt("Enter the number of times you want me to say 'Hola'")
);

for (let i = 0; i < numberOfTimes; i++) {
    alert("Hola");
}
