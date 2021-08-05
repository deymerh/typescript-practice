"use strict";
function generica(arg) {
    return arg;
}
function funcionGenerica(params) {
    return params;
}
console.log(generica(new Date()));
console.log(generica("Hola Deymer"));
console.log(generica(1980));
var unaPersona = {
    nombre: 'Deymer',
    apellido: 'Hernandez'
};
var otraPersona = {
    nombre: 'Deymer',
    apellido: 'Hernandez',
    edad: 31
};
var Cuadrado = /** @class */ (function () {
    function Cuadrado(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    Cuadrado.prototype.area = function () {
        //Converision numerica, unario +
        return +this.base * +this.altura;
    };
    return Cuadrado;
}());
var cuadrado = new Cuadrado(1, 1);
cuadrado.base = 20;
cuadrado.altura = 30;
console.log(funcionGenerica(otraPersona));
console.log(funcionGenerica(unaPersona));
console.log('Area: ', cuadrado.area());
