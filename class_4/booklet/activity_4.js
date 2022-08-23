/*
ACTIVIDAD 4
COTIZACIÓN

Codificar dos funciones:
Una función cotizarDolar(pesos), la cual recibe un valor monetario en pesos argentinos, y lo retorna en su equivalente en dólares.
Una función cotizarPesos(dolar), que recibe un valor monetario en dólares, y lo retorna en su equivalente en pesos argentinos.
Luego invocar las funciones solicitando  al usuario el valor y el tipo de cotización a realizar.
*/

const DOLLAR_QUOTE = 300;
const quoteDollars = (amountInPesos) => amountInPesos * DOLLAR_QUOTE;
const quotePesos = (amountInDollars) => amountInDollars / DOLLAR_QUOTE;

let amount = parseFloat(prompt("Enter amount to quote"));
let currencyIdentifier = prompt(
    "Enter the desired currency to quote. ARS for Pesos - USD for dollars"
);

if (currencyIdentifier === "ARS") {
    alert(
        `${amount} pesos quoted in dollars is ${quoteDollars(amount)} dollars.`
    );
} else if (currencyIdentifier === "USD") {
    alert(`${amount} dollars quoted in pesos is ${quotePesos(amount)} pesos.`);
} else {
    alert("Error. You can only quote in ARS or USD");
}
