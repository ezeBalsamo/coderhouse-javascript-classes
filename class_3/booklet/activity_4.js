/*
ACTIVIDAD 4
EL INNOMBRABLE

Solicitar al usuario la carga de nombres de forma consecutiva,  hasta que se ingrese “Voldemort”.
Luego realizar un única salida por alerta, con todos los nombres ingresados.
*/

let names = "";
let name = prompt("Enter a name");

while (name !== "Voldemort") {
    names += `${name}\n`;
    name = prompt("Enter a name");
}

alert(names);
