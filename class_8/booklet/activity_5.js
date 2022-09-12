/*
ACTIVIDAD 5
BOTON CONTRATAR

Usando de base la resolución de la actividad 4, añadir un ‘id’ como propiedad a la clase Cantante, y modificar las instancias, definiendo un identificador único por cada cantante.
Luego, por cada div generado, incluir un botón cuyo id de la etiqueta tenga el valor asociado a la propiedad ‘id’ del objeto, y el texto de cada botón sea ‘Contratar”.

*/

class Cantante{
    constructor(id, nombre, edad){
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
    }
}

const cantantes = [];
cantantes.push(new Cantante(1, 'Jon Gomm',45));
cantantes.push(new Cantante(2, 'Joe Satriani',66));
cantantes.push(new Cantante(3, 'Rick Astley',56));
cantantes.push(new Cantante(4, 'Dave Grohl',53));
cantantes.push(new Cantante(5, 'Elton John',75));

for (const cantante of cantantes) {
    let div = document.createElement("div");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let button = document.createElement("button");

    h2.innerText = cantante.nombre;
    p.innerText = cantante.edad;
    button.setAttribute('id', cantante.id.toString());
    button.innerText = 'Contratar';
    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(button);
    document.body.appendChild(div);
}
