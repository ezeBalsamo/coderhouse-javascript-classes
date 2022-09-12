/*
ACTIVIDAD 4
LA BANDA

Declarar una clase Cantante, instanciando al menos cinco (5) objetos con ella, asignándoles a un array. Luego, por cada cantante crear una etiqueta div, cuya estructura interna detalle la información del objeto, agregando cada contenedor al body.

*/

class Cantante{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}

const cantantes = [];
cantantes.push(new Cantante('Jon Gomm',45));
cantantes.push(new Cantante('Joe Satriani',66));
cantantes.push(new Cantante('Rick Astley',56));
cantantes.push(new Cantante('Dave Grohl',53));
cantantes.push(new Cantante('Elton John',75));

for (const cantante of cantantes) {
    let div = document.createElement("div");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");

    h2.innerText = cantante.nombre;
    p.innerText = cantante.edad;
    div.appendChild(h2);
    div.appendChild(p);
    document.body.appendChild(div);
}
