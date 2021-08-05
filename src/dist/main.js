var Validaciones;
(function (Validaciones) {
    function validarFecha(fecha) {
        if (isNaN(fecha.valueOf())) {
            return false;
        }
        return true;
    }
    Validaciones.validarFecha = validarFecha;
})(Validaciones || (Validaciones = {}));
var Validaciones;
(function (Validaciones) {
    function validarTexto(texto) {
        if (texto.length > 3) {
            return true;
        }
        return false;
    }
    Validaciones.validarTexto = validarTexto;
})(Validaciones || (Validaciones = {}));
//Esto es parecido a la exportcaion e inportacion de modulos en ES6
//Asi funcionan los namespaces
/// <reference path="./validaciones/fechas.ts" />
/// <reference path="./validaciones/textos.ts" />
var hoy = new Date();
if (Validaciones.validarFecha(hoy)) {
    console.log('La fecha es valida!');
}
else {
    console.log('La fecha es invalida!❌');
}
if (Validaciones.validarTexto('Deymer')) {
    console.log('El texto es valida! ✔️');
}
else {
    console.log('El texto es invalida!❌');
}
