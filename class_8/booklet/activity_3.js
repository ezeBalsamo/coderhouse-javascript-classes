/*
ACTIVIDAD 3
ELEGIR DESTINO

Declarar un array de países, y crear una etiqueta select. Por cada país, concatenar una etiqueta option a una template de caracteres, asignando el resultado al interior de la etiqueta padre. El value de cada opción es la posición de la ciudad en la colección. Por último, agregar el select al body.

*/

const paises = ['Argentina', 'Brasil', 'Uruguay', 'Colombia', 'Perú'];
let select = document.createElement("select");

paises.forEach((pais, index) => select.innerHTML += `<option value="${index}">${pais}</option>`);
document.body.appendChild(select);
