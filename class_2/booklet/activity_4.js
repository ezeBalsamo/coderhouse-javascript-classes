/*
ACTIVIDAD 4
PRESUPUESTO

Solicitar al usuario un (1) número.
Si el valor está entre dos números, efectuar una de las siguientes salidas, según corresponda:
- “Presupuesto bajo” si está entre 0 y 1000.
- “Presupuesto medio” si está entre 1001 y 3000.
- “Presupuesto alto” si es  mayor que 3000.

*/

let budget = parseFloat(prompt("Enter your budget"));
if (0 <= budget && budget <= 1000) {
  alert("Low budget");
} else if (1001 <= budget && budget <= 3000) {
  alert("Medium budget");
} else if (budget > 3000) {
  alert("High budget");
} else {
  alert("Budget must be strictly positive.");
}
