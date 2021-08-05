function generica<T> (arg:T) {
  return arg;
}
function funcionGenerica<T>(params:T) {
  return params;
}
console.log( generica(  new Date())  );
console.log( generica( "Hola Deymer" ) );
console.log( generica( 1980 ) );

type Cosa1 = {
  nombre: string;
  apellido: string;
}

const unaPersona = {
  nombre: 'Deymer',
  apellido: 'Hernandez'
}
const otraPersona = {
  nombre: 'Deymer',
  apellido: 'Hernandez',
  edad: 31
}

class Cuadrado<T>{
  base:T;
  altura: T;
  constructor( base:T, altura:T ) {
    this.base = base;
    this.altura = altura;
  }
  area(): number{
    //Converision numerica, unario +
    return +this.base * +this.altura;
  }
}

let cuadrado = new Cuadrado(1, 1);
cuadrado.base = 20;
cuadrado.altura = 30;
console.log( funcionGenerica( otraPersona ) );
console.log(funcionGenerica(unaPersona));

console.log( 'Area: ', cuadrado.area() );