/*
ACTIVIDAD 2
REGISTRO DE TIENDAS

Solicitar al usuario el registro de cinco (5) tiendas.
Emplear la clase Tienda de la actividad 1, para instanciar los objetos en función de las entradas capturadas. Generar una única salida compuesta por la información de los objetos instanciados.

*/

class Tienda{
    constructor(nombre, direccion, propietario, rubro) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }
}

let descripcionDeTiendas = '';
for (let i = 0; i < 5; i++) {
    let tienda = new Tienda(prompt("Ingrese nombre"),
                        prompt("Ingrese dirección"),
                        prompt("Ingrese propietario"),
                        prompt("Ingrese rubro"));
    descripcionDeTiendas += `${tienda.nombre}, del rubro ${tienda.rubro}, ubicada en ${tienda.direccion}, a cargo de ${tienda.propietario}`;
}
