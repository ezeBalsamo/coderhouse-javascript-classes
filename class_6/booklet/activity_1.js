/*
ACTIVIDAD 1
EL EQUIPO

Declarar un array de cadenas, compuesto por  los cuatro (4) nombres pertenecientes a los integrantes de un equipo. Luego recorrer el array, e informar por alerta el nombre de cada jugador, así como la posición  que ocupa en la colección.

*/

const theBeatles = ["John", "Paul", "George", "Ringo"];
for (let i = 0; i < theBeatles.length; i++) {
    alert(`${i} - ${theBeatles[i]}`)
}
