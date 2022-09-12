/*
ACTIVIDAD 3
EL EQUIPO

Declarar una clase Jugador que permita registrar nombre, número de camiseta, edad, y si está lesionado. Luego instanciar al menos cinco (5) objetos usando esta clase, y asociarlos a un array.

*/

class Jugador {
    constructor(nombre, numeroDeCamiseta, edad, estaLesionado) {
        this.nombre = nombre;
        this.numeroDeCamiseta = numeroDeCamiseta;
        this.edad = edad;
        this.estaLesionado = estaLesionado;
    }
}
const jugadores = [];
jugadores.push(new Jugador("Pepe Sand", 9, 42, false));
jugadores.push(new Jugador("Pedro de la Vega", 10, 21, true));
jugadores.push(new Jugador("Fernando Monetti", 1, 29, false));
jugadores.push(new Jugador("Diego Braghieri", 6, 35, true));
jugadores.push(new Jugador("Lautaro Acosta", 7, 34, false));
console.log(jugadores);
