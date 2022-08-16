/*
ACTIVIDAD 5
VACÍO

Solicitar al usuario cuatro (4) productos de almacén. Si todos los elementos fueron cargados, realizar una única salida compuesta por el listado de productos. Caso contrario, la salida será “Error: Es necesario cargar todos los productos”.
*/

function isBlank(potentiallyBlankString) {
  return !potentiallyBlankString.trim();
}

let potentialFirstProductName = prompt("Enter first product");
let potentialSecondProductName = prompt("Enter second product");
let potentialThirdProductName = prompt("Enter Third product");
let potentialFourthProductName = prompt("Enter fourth product");

if (
  isBlank(potentialFirstProductName) ||
  isBlank(potentialSecondProductName) ||
  isBlank(potentialThirdProductName) ||
  isBlank(potentialFourthProductName)
) {
  alert("Error: You must specify all products.");
} else {
  alert(`You are going to buy:
- ${potentialFirstProductName}
- ${potentialSecondProductName}
- ${potentialThirdProductName}
- ${potentialFourthProductName}`);
}
