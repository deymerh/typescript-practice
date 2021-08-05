"use strict";
console.log('Hola Typescript!');
function Saludar(name, lastName) {
    return "Hola " + name + " " + lastName;
}
Saludar('Deymer', 'Hernandez');
var arreglo = ['d', 'b', 'c'];
var arreglo2 = [1, 2, 3, 4];
var Volumen;
(function (Volumen) {
    Volumen[Volumen["min"] = 0] = "min";
    Volumen[Volumen["medio"] = 1] = "medio";
    Volumen[Volumen["max"] = 2] = "max";
})(Volumen || (Volumen = {}));
function capitalizador(palabra) {
    return palabra.charAt(0).toUpperCase() + palabra.substr(1).toLowerCase();
    //return `${palabra.charAt(0).toUpperCase()} ${palabra.substr(1).toLowerCase()}`;
}
function saludoPersona(nombre, apellido, capitalizar) {
    if (capitalizar === void 0) { capitalizar = false; }
    if (capitalizar) {
        //return `True: ${capitalizador(nombre)} ${capitalizador(apellido)}`
        return capitalizador(nombre) + " " + capitalizador(apellido);
    }
    else {
        return "False: " + nombre + " " + apellido;
    }
}
console.log(saludoPersona('deymer', 'hernández', true));
console.log(saludoPersona('deymer', 'hernandez'));
