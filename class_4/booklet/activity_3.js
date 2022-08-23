/*
ACTIVIDAD 3
IMPUESTOS

Codificar una función con la siguiente cabecera: impuesto(precio, porcentaje). En ella, se retorna un valor numérico compuesto por el precio recibido, más la suma del porcentaje ingresado.
Luego invocar la función de forma iterativa cinco (5) veces, solicitando en cada ciclo un precio y porcentaje al usuario.
*/

function taxApplied(price, percentage) {
    return price + (price * percentage) / 100;
}

for (let i = 0; i < 5; i++) {
    let enteredPrice = parseFloat(prompt("Enter a price"));
    let enteredPercentage = parseFloat(prompt("Enter a percentage to apply"));
    let priceWithTax = taxApplied(enteredPrice, enteredPercentage);
    alert(`The price with tax applied is ${priceWithTax}`);
}
