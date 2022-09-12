/*
ACTIVIDAD 5
EL CLIENTE

Declarar una clase Cliente que permita:
- Registrar nombre, presupuesto, si tiene tarjeta de descuento, y número de teléfono del cliente.
- Un método transferirDinero(valor), que permita  obtener y restar cierta cantidad del presupuesto, siempre que este parámetro sea menor al valor enviado, y mayor que cero.

Luego invocar al menos tres (3) objetos usando esta clase, y solicitar al usuario cinco (5) números. Informar por alerta si cada uno de los clientes cuenta con el presupuesto suficiente para realizar una transferencia de igual monto al ingresado.

*/

class Cliente{
    constructor(nombre, presupuesto, tieneTarjetaDeDescuento, numeroDeTelefono) {
        this.nombre = nombre;
        this.presupuesto = presupuesto;
        this.tieneTarjetaDeDescuento = tieneTarjetaDeDescuento;
        this.numeroDeTelefono = numeroDeTelefono;
    }

    transferirDinero(valor){
        if(this.presupuesto > 0 && valor < this.presupuesto){
            this.presupuesto -= valor;
            return valor;
        }
        return 0;
    }
}

const homero = new Cliente("Homero", 2000, true, "1234560");
const carlos = new Cliente("Carlos", "1000", false, "21234560");
const barney = new Cliente("Barny", "50", false, "231234560");

let alertarSiPuedeTransferir = (cliente, dinero) => {
    if(cliente.transferirDinero(dinero)){
        alert(`${cliente.nombre} puede transferir ${dinero} pesos.`);
    }
}

for (let i = 0; i < 5; i++) {
    let dineroATransferir = parseFloat(prompt("Ingrese dinero a transferir"));
    alertarSiPuedeTransferir(homero, dineroATransferir);
    alertarSiPuedeTransferir(carlos, dineroATransferir);
    alertarSiPuedeTransferir(barney, dineroATransferir);
}
