type Heroe = {
  nombre: string,
  edad: number,
  poderes: string[],
  getNombre:()=>string
}

let flash = {
  nombre: "Barry Allen",
  edad: 24,
  poderes: ["Poder correr rapido", "Viajar por el tiempo"],
  getNombre(){
    return this.nombre;
  }
};