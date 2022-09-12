/*
ACTIVIDAD 1
BIENVENIDO A...

Declarar un array con nombres de ciudades y recorrerlo. Por cada ciudad, crear un etiqueta h2 que contenga el nombre, y agregarla al body.

*/

const ciudades = ['Springfield', 'Shelbyville', 'Ogdenville', 'Star City', 'Central City'];

for (const ciudad of ciudades) {
    let h2 = document.createElement("h2");
    h2.innerText = ciudad;
    document.body.appendChild(h2);
}
