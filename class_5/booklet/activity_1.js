/*
ACTIVIDAD 1
LA TIENDA

Declarar un clase Tienda que permita registrar:
- Nombre de la tienda.
- Dirección de la tienda.
- Propietario de la tienda.
- Rubro de la tienda.
Luego invocar al menos tres (3) objetos usando esta clase.

*/

class Tienda{
    constructor(nombre, direccion, propietario, rubro) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }
}

const kwikEMart = new Tienda("Kwik-E-Mart", "Park 123", "Apu","Almacén");
const ednas = new Tienda("Edna's Edibles", "PEREZ 323", "Edna Krabappel","Panaderia");
const bamBam = new Tienda("Bam bam Burger", "Av. Belgrano 1280", "BBB","Gastronomía");

console.log(kwikEMart);
console.log(ednas);
console.log(bamBam);
