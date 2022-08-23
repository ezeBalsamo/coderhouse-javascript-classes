/*
ACTIVIDAD 1
EL PIZARRÓN

Solicitar al usuario un (1) un número y un (1) texto. Efectuar una salida por alerta con el mensaje ingresado por cada repetición, hasta alcanzar el valor señalado por el usuario.
*/

let textToRepeat = prompt("Enter the text to repeat");
let numberOfRepetitions = parseInt(prompt("Enter the number of repetitions"));

for (let i = 0; i < numberOfRepetitions; i++) {
  alert(textToRepeat);
}
