/*
ACTIVIDAD 5
FILTRAR equipo

Codificar una función con la siguiente cabecera: filtroequipo(equipo, edad). En ella, se recibe un array de equipo (objetos instanciados empleando la clase de la actividad 3), y una edad. La función retorna los equipo cuya edad coincide con el segundo parámetro.
Realizar al menos cinco (5) filtros solicitando la edad al usuario, e informar sobre el resultado de los equipo filtrados.

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

const filtroJugadores = (equipo, edad) => equipo.filter(jugador => jugador.edad === edad);

const notificarJugadores = (jugadores) => {
    let descripcionDeJugadores = '';
    for (const jugador of jugadores) {
        descripcionDeJugadores += `${jugador.nombre}, de ${jugador.edad}, vistiendo la camiseta número ${jugador.numeroDeCamiseta}\n`;
    }
    alert(descripcionDeJugadores);
}

for (let i = 0; i < 5; i++) {
    let edad = parseInt(prompt("Ingrese la edad a buscar"));
    let jugadores = filtroJugadores(equipo, edad);
    if (jugadores.length > 0){
        notificarJugadores(jugadores);
    }
    else{
        alert(`No se encontraron jugadores de ${edad} años.`);
    }
}
