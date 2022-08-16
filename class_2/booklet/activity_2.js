/*
ACTIVIDAD 2
PRESIONAR Y

Solicitar al usuario una (1) tecla.
Si se presiona “y” (minúscula), o “Y” (mayúscula), realizar una salida por alerta con el mensaje “Correcto”. Caso contrario, la salida será “Error”.
*/

let pressedKey = prompt("Press a key");
pressedKey === "y" || pressedKey === "Y" ? alert("Correct") : alert("Error");
