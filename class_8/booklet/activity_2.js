/*
ACTIVIDAD 2
LA LISTA

Solicitar al usuario cinco (5) tareas de forma iterativa, cargandolas en un array. Crear una etiqueta ul, y concatenar una etiqueta li a un template de caracteres por cada tarea ingresada, asignando el resultado al interior de la etiqueta ul. Por último, agregar la lista al body.

*/

const tareas = [];
for (let i = 0; i < 5; i++) {
    tareas.push(prompt("Ingrese una tarea"));
}

let ul = document.createElement("ul");
let listItemsAsString = '';
for (const tarea of tareas) {
    listItemsAsString += `<li>${tarea}</li>`;
}
ul.innerHTML = listItemsAsString;

document.appendChild(ul);
