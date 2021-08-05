"use strict";
var Avenger = /** @class */ (function () {
    function Avenger(nombre, equipo, nombreReal) {
        this.nombre = "Atman";
        this.equipo = "no sé";
        this.nombreReal = "Aun no sé";
        this.puedePelear = false;
        this.peleasGanadas = 0;
        console.log('Se ejecutó el constructor!');
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    Avenger.prototype.bio = function () {
        var mensaje = this.nombre + " " + this.nombreReal + " " + this.equipo;
        console.log(mensaje);
    };
    Avenger.prototype.cambiarEquipoPublic = function (nuevoEquipo) {
        return this.cambiarEquipo(nuevoEquipo);
    };
    Avenger.prototype.cambiarEquipo = function (nuevoEquipo) {
        if (nuevoEquipo === this.equipo) {
            return false;
        }
        else {
            return true;
        }
    };
    return Avenger;
}());
var antman = new Avenger("Anman", 'cap', 'Scot Lang');
antman.bio();
console.log(antman.cambiarEquipoPublic('cap'));
