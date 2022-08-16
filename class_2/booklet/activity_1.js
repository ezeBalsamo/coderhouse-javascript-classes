/*
ACTIVIDAD 1
YO NO FUI

Solicitar al usuario un (1) nombre.
Si el mismo es igual a otro nombre almacenado en una variable, realizar una salida por alerta con el mensaje “Fui yo”.
Caso contrario, la salida será “Yo no fui”.
*/

let expectedName = "Bart";
let enteredName = prompt("Enter a name");
expectedName === enteredName ? alert("I did it") : alert("I didn't do it");
