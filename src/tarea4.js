
// Convierta este archivo de ES5 a ES6 - JavaScript 2015
// OJO: No es a TypeScript, solo JAVASCRIPT


// ==============================
//  Spiderman info
// ==============================
// Constantes?
const HEROE = "Spiderman";

// Declaracion de variables?
let spiderman = "Peter Parker";
let venom = "Eddie Brock";

// Destructuracion de arreglos?
let versiones = ["Spider-Man 2099","Spider-Girl","Ultimate Spider-Man"];

const [spiderman2099, spidergirl, ultimate] = versiones;

// Destructuracion de objetos?
let villanos = {
  venom: "Eddie Brock",
  carnage: "Cletus Kasady",
  sandman: "William Baker"
};

const { venom:vemon2, carnage, sandman } = villanos;

// Ciclo for Of?
for(let i=0; i<= versiones.length - 1; i++){
  var spider = versiones[i];
  console.log(spider);
}
for (let version of versiones) {
  console.log(version);
}