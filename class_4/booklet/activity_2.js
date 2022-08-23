/*
ACTIVIDAD 2
REDONDEO

Codificar una función que reciba un número decimal por parámetro, y lo retorne redondeado al entero más cercano. Para ello, puede emplearse  Math.round.
Luego invocar la función de forma iterativa cinco (5) veces, solicitando en cada ciclo un número al usuario.


*/

function round(decimalNumber) {
    return Math.round(decimalNumber);
}

for (let i = 0; i < 5; i++) {
    let enteredNumber = parseFloat(prompt("Enter a decimal number"));
    alert(`${enteredNumber} rounded is ${round(enteredNumber)}`);
}
