/*
ACTIVIDAD 4
BUSCAR JUGADOR

Codificar una función con la siguiente cabecera: buscarJugador(equipo, jugador). En ella, se recibe por parámetro un array de jugadores (objetos instanciados empleando la clase de la actividad 3), y el nombre de un jugador. La función retorna el jugador que coincide con el nombre.
Realizar al menos tres (3) búsquedas solicitando el nombre al usuario, e informar sobre el resultado de cada búsqueda.

*/

class Jugador {
    constructor(nombre, numeroDeCamiseta, edad, estaLesionado) {
        this.nombre = nombre;
        this.numeroDeCamiseta = numeroDeCamiseta;
        this.edad = edad;
        this.estaLesionado = estaLesionado;
    }
}

const equipo = [];
equipo.push(new Jugador("Pepe Sand", 9, 42, false));
equipo.push(new Jugador("Pedro de la Vega", 10, 21, true));
equipo.push(new Jugador("Fernando Monetti", 1, 29, false));
equipo.push(new Jugador("Diego Braghieri", 6, 35, true));
equipo.push(new Jugador("Lautaro Acosta", 7, 34, false));

const buscarJugador = (equipo, nombreDeJugador) => {
    return equipo.find(jugador => jugador.nombre === nombreDeJugador.toUpperCase());
}

for (let i = 0; i < 3; i++) {
    let nombreDeJugador = prompt("Ingresar el nombre del jugador a buscar");
    let jugadorOUndefined = buscarJugador(equipo, nombreDeJugador);
    if (jugadorOUndefined !== undefined){
        alert(`${jugadorOUndefined.nombre}, de ${jugadorOUndefined.edad}, vistiendo la camiseta número ${jugadorOUndefined.numeroDeCamiseta}`);
    }else{
        alert(`No se ha encontrado al jugador ${nombreDeJugador}`);
    }
}