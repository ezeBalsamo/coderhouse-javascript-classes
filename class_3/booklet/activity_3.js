/*
ACTIVIDAD 3
REGISTRO DE ALUMNOS

Solicitar al usuario la carga de diez (10) alumnos de forma consecutiva.
Luego realizar un única salida por alerta, con el listado de alumnos registrados.
*/

let studentNames = "";
for (let i = 0; i < 10; i++) {
    let studentName = prompt("Enter a student name");
    studentNames += `${studentName}\n`;
}
alert(studentNames);
