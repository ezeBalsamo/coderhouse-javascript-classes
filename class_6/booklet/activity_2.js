/*
ACTIVIDAD 2
CARGA EL EQUIPO

Declarar un array vacío, y cargarlo de forma dinámica solicitando al usuario nombres de forma consecutiva,  hasta que se ingrese “ESC”. Luego recorrer el array, e informar por alerta el nombre de cada jugador, así como la posición  que ocupa en la colección.

*/

const nombreDeJugadores = [];

let nombreDeJugador = prompt("Ingresar jugador");
while(nombreDeJugador !== 'ESC'){
    nombreDeJugadores.push(nombreDeJugador);
    nombreDeJugador = prompt("Ingresar jugador");
}

for (let i = 0; i < nombreDeJugadores.length; i++) {
    alert(`${i} - ${nombreDeJugadores[i]}`)
}
