/*
ACTIVIDAD 4
COMPRANDO PRODUCTOS

Solicitar al usuario un (1) número de forma consecutiva, hasta que se ingrese “ESC”. Generar una única salida compuesta por los siguientes productos, según el valor ingresado en cada ciclo:
- “Tomate” si es 1.
- “Papa” si es 2.
- “Carne” si es 3.
- “Pollo” si es 4.
*/

let productNames = "";
let enteredValue = prompt("Enter a number between 1 and 4 or ESC to stop.");

while (enteredValue !== "ESC") {
    switch (enteredValue) {
        case "1":
            productNames += "Tomato\n";
            break;
        case "2":
            productNames += "Potato\n";
            break;
        case "3":
            productNames += "Meat\n";
            break;
        case "4":
            productNames += "Chicken\n";
            break;
        default:
            alert(
                "Error. You must enter a number between 1 and 4 or ESC to stop."
            );
            break;
    }
    enteredValue = prompt("Enter a number between 1 and 4 or ESC to stop.");
}

alert(productNames);
