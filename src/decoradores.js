"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
console.log('=====__DECORADORES__=====');
function consola(constructor) {
    console.log(constructor);
}
//Facatory Decoratos
// Un decorador de fabrica es un decorador comun y corriente que puede recibir parametros
// Pero èste debe retonar algo que pueda ser usado como un decorador
function imprimirConsola(imprimir) {
    if (imprimir) {
        return consola;
    }
    else {
        return null;
    }
}
var VillanoDecorador = /** @class */ (function () {
    function VillanoDecorador(nombre) {
        this.nombre = nombre;
    }
    VillanoDecorador = __decorate([
        imprimirConsola(true)
    ], VillanoDecorador);
    return VillanoDecorador;
}());
