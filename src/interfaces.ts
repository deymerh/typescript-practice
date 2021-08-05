// Crear interfaces
interface Auto{
  encender:boolean;
  velocidadMaxima:number;
  acelerar():void
}

// Cree una interfaz para validar el auto (el valor enviado por parametro)
function conducirBatimovil( auto:Auto ):void{
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
}

let batimovil2:Auto = {
  encender:false,
  velocidadMaxima:0,
  acelerar(){
    console.log("...... run!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales
interface Guason{
  reir: boolean;
  comer?: boolean;
  llorar?: boolean;
}
let guason:Guason = {
  reir: true,
  comer:true,
  llorar:false
}

function reir( persona:Guason ):void{
  if( persona.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion
interface CiudadGoticaFunc{
  (ciudadanos:string[]):number
}
const ciudadGotica:CiudadGoticaFunc=(ciudadanos:string[]):number=>ciudadanos.length;


// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
interface Persona{
  nombre:string;
  edad:number;
  sexo:number; //1=Hombre, 2=Mujer;
  estadoCivil:string;
  imprimirBio(): void;
}


class PersonaClass implements Persona{
  nombre:string;
  edad:number;
  sexo:number;
  estadoCivil:string;
  imprimirBio:()=>void;
  constructor(nombre: string, edad: number, sexo: number, estadoCivil: string, imprimirBio:()=>void) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.estadoCivil = estadoCivil;
    this.imprimirBio = imprimirBio;
  } 
}