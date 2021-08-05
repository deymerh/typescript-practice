console.log('Hola Typescript!');

function Saludar(name:string, lastName:string):string{
  return `Hola ${name} ${lastName}`;
}

Saludar('Deymer', 'Hernandez');

let arreglo:string[] = ['d', 'b', 'c'];
let arreglo2:number[] = [1,2,3,4];

enum Volumen{
  min, medio, max,
}

function capitalizador(palabra:string){
  return palabra.charAt(0).toUpperCase() + palabra.substr(1).toLowerCase()
  //return `${palabra.charAt(0).toUpperCase()} ${palabra.substr(1).toLowerCase()}`;
}

function saludoPersona(
  nombre:string, apellido:string, capitalizar:boolean = false
){
  if (capitalizar) {
    //return `True: ${capitalizador(nombre)} ${capitalizador(apellido)}`
    return capitalizador(nombre) + " " + capitalizador(apellido);
  }else{
    return `False: ${nombre} ${apellido}`
  }
}

console.log( saludoPersona('deymer', 'hernández', true) );
console.log( saludoPersona('deymer', 'hernandez') );