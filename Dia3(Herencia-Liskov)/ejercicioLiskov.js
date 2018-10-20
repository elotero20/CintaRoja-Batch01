class Largometraje{
    constructor(nombre,tiempo){
        this.tiempo = tiempo;
        this.nombre = nombre;
    }
    getTiempo(){
        return this.tiempo;
    }
    getNombre(){
        return this.nombre;
    }
}

class Pelicula extends Largometraje{
    constructor(nombre,tiempo,genero){
        super(nombre,tiempo);
        this.genero = genero;
    }
}

class Documental extends Largometraje{
    constructor(nombre, tiempo, director){
        super(nombre,tiempo);
        this.director = director;
    }
}

class Cine{
    constructor(largometraje){
        this.largometraje = largometraje;
    }
    reproducir(){
        return this.largometraje.getNombre() + " Reproduciendo..." + this.largometraje.getTiempo();
    }
}

var doc = new Documental("Las drogas son malas","120min","Arturo");
var peli = new Pelicula("DeadPool","80min","Comedia");

var cine = new Cine(peli);

console.log(cine.reproducir());