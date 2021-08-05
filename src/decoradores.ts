console.log('=====__DECORADORES__=====');

function consola(constructor: Function) {
  console.log(constructor);
}

//Facatory Decoratos
// Un decorador de fabrica es un decorador comun y corriente que puede recibir parametros
// Pero èste debe retonar algo que pueda ser usado como un decorador
function imprimirConsola(imprimir:boolean):Function | null{
  if (imprimir) {
    return consola;
  } else {
    return null;
  }
}

@imprimirConsola(true)
class VillanoDecorador{
  constructor(public nombre: string) {
  }
}