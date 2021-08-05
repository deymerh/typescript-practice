class Avenger2{
  constructor(public nombre:string, private nombreReal:string){
    console.log('Constructor de Avenger2 ejecutado');
  }
  protected getNombre():string{
    console.log('Aenger2 desde metodo publico');
    return this.nombre;
  }
}

class Xmen extends Avenger2{
  constructor(a:string, b:string){
    console.log('Constructor de Xmen ejecutado');
    super(a,b)
  }
  public getNombre():string{
    console.log('Xmen desde metodo publico');
    return super.getNombre();
  }
}

let ciclope:Xmen = new Xmen('Ciclope', 'Sccot');

console.log(ciclope.getNombre());
