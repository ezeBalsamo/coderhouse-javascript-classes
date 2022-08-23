/*
ACTIVIDAD 1
ENTRADAS Y SALIDAS

Codificar tres funciones:
Una función entrada(), la cual solicite un valor al usuario y lo retorne.
Una función procesamiento(valor), donde se transforme la entrada.
Una función salida(valor), la cual mostrará el resultado por alerta.
Luego, invocar las tres funciones.

*/

function entrada() {
    return prompt("Enter a name");
}

function procesamiento(name) {
    return name.toUpperCase();
}

function salida(name) {
    alert(name);
}

let enteredName = entrada();
let nameInUppercase = procesamiento(enteredName);
salida(nameInUppercase);
