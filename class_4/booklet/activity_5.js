/*
ACTIVIDAD 5
VALIDACION

Codificar una función con la siguiente cabecera: validacion(cadena). En ella, se retorna un valor booleano, el cual es true si el parámetro no es un cadena vacía. Caso contrario, se retorna false. Luego invocar la función de forma iterativa, hasta que el usuario tipee “ESC”, solicitando en cada ciclo una cadena a validar.
*/

function isNotEmpty(potentiallyEmptyString) {
    return potentiallyEmptyString !== "";
}

let enteredText = prompt("Enter some text to validate");
while (enteredText !== "ESC") {
    if (isNotEmpty(enteredText)) {
        alert(`You entered ${enteredText}`);
    } else {
        alert("You haven't entered any text");
    }
    enteredText = prompt("Enter some text to validate");
}
