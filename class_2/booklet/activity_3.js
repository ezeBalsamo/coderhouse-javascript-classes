/*
ACTIVIDAD 3
ESCOGER PERSONAJE

Solicitar al usuario un (1) un número.
Si el valor está entre 1 y 4, efectuar una de las siguientes salidas según corresponda:
“Elegiste a Homero” si es 1.
“Elegiste a Marge” si es 2.
“Elegiste a Bart” si es 3.
“Elegiste a Lisa” si es 4.
*/

let enteredNumber = parseInt(prompt("Enter a number between 1 and 4"));
if (enteredNumber === 1) {
  alert("You choose Homer");
} else if (enteredNumber === 2) {
  alert("You choose Marge");
} else if (enteredNumber === 3) {
  alert("You choose Bart");
} else if (enteredNumber === 4) {
  alert("You choose Lisa");
} else {
  alert("You must choose a number between 1 and 4");
}
