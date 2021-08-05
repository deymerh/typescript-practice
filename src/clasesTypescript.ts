class Avenger{
  public nombre:string = "Atman";
  private equipo:string = "no sé";
  private nombreReal:string = "Aun no sé";

  private puedePelear:boolean = false;
  private peleasGanadas:number = 0;

  constructor( nombre:string, equipo:string, nombreReal:string){
    console.log('Se ejecutó el constructor!');
    this.nombre = nombre;
    this.equipo = equipo;
    this.nombreReal = nombreReal;
  }
  public bio():void{
    let mensaje = `${this.nombre} ${this.nombreReal} ${this.equipo}`;
    console.log(mensaje);
  }
  public cambiarEquipoPublic(nuevoEquipo:string):boolean{
    return this.cambiarEquipo(nuevoEquipo);
  }
  private cambiarEquipo(nuevoEquipo:string):boolean{
    if (nuevoEquipo === this.equipo) {
      return false;
    } else {
      return true;
    }
  }
}

let antman:Avenger = new Avenger("Anman", 'cap', 'Scot Lang');

antman.bio();

console.log(antman.cambiarEquipoPublic('cap'));