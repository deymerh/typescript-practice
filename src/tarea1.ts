// Tipos
var batman:string = "Bruce";
var superman:string = "Clark";

var existe:boolean = false;

// Tuplas
var parejaHeroes:[string, string] = [batman,superman];
var villano:[string, number, boolean] = ["Lex Lutor", 5, true];

// Arreglos
var aliados:string[] = ["Mujer Maravilla","Acuaman","San", "Flash"];

//Enumeraciones
enum Fuerza{
  Flash = 5,
  Superman = 100,
  Batman = 1,
  Acuaman = 0,
}

var fuerzaFlash = Fuerza.Flash;
var fuerzaSuperman = Fuerza.Superman;
var fuerzaBatman = Fuerza.Batman;
var fuerzaAcuaman = Fuerza.Acuaman;

// Retorno de funciones
function activar_batiseñal():string{
  return "activada";
}

function pedir_ayuda():void{
  console.log("Auxilio!!!");
}

// Aserciones de Tipo
var poder:string = "100";
var largoDelPoder:number = poder.toString().length;
console.log( largoDelPoder );
