"use strict";
// Cree una interfaz para validar el auto (el valor enviado por parametro)
function conducirBatimovil(auto) {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
}
var batimovil2 = {
    encender: false,
    velocidadMaxima: 0,
    acelerar: function () {
        console.log("...... run!!!");
    }
};
var guason = {
    reir: true,
    comer: true,
    llorar: false
};
function reir(persona) {
    if (persona.reir) {
        console.log("JAJAJAJA");
    }
}
var ciudadGotica = function (ciudadanos) { return ciudadanos.length; };
var PersonaClass = /** @class */ (function () {
    function PersonaClass(nombre, edad, sexo, estadoCivil, imprimirBio) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.estadoCivil = estadoCivil;
        this.imprimirBio = imprimirBio;
    }
    return PersonaClass;
}());
