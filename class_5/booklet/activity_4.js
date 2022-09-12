/*
ACTIVIDAD 4
VALIDAR PROPIETARIO

Declarar un método para la clase Tienda con la siguiente cabecera esPropietario(nombre). Se retorna true si el nombre enviado corresponde al propietario de la tienda.Caso contrario, se retorna false.
Luego, invocar al menos tres(3) objetos usando esta clase y solicitar al usuario cinco(5) nombres. Informar por alerta si los nombres pertenecen a algún dueño de tienda.


*/

class Tienda{
    constructor(nombre, direccion, propietario, rubro) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }

    esPropietario(unPotentialPropietario){
        return this.propietario === unPotentialPropietario;
    }
}

const kwikEMart = new Tienda("Kwik-E-Mart", "Park 123", "Apu","Almacén");
const ednas = new Tienda("Edna's Edibles", "PEREZ 323", "Edna Krabappel","Panaderia");
const bamBam = new Tienda("Bam bam Burger", "Av. Belgrano 1280", "BBB","Gastronomía");

let alertarSiEsPropietario = (propietario, tienda) => {
    if (tienda.esPropietario(propietario)){
        alert(`${propietario} es propietario de la tienda ${tienda.nombre}`)
    }
}

for (let i = 0; i < 5; i++) {
    let propietario = prompt("Ingresar propietario");
    alertarSiEsPropietario(propietario, kwikEMart);
    alertarSiEsPropietario(propietario, ednas);
    alertarSiEsPropietario(propietario, bamBam);
}
