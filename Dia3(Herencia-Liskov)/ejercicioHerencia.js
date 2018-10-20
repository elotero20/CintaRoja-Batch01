// class Animal{
//     constructor(nombre,peso){
//     this.nombre=nombre;
//     this.peso = peso;
//     }
//     getNombre(){
//         console.log(this.nombre);
//     }
//     setNombre(nombre_nuevo){
//         this.nombre = nombre_nuevo;
//     }
//     comer(comida){
//         console.log(this.nombre + " esta comiendo..." + comida);
//     }
// }

// class Perro extends Animal{
//     constructor(nombre,peso,raza, color){
//         super(nombre,peso);
//         this.raza = raza;
//         this.color = color;
//     }
//     ladrar(){
//         console.log("Waaaaf waaaf");
//     }

// }

// class Gato extends Animal{
//     constructor(nombre,peso, raza, color){
//         super(nombre, peso);
//         this.raza = raza;
//         this.color = color;
//     }
//     maullar(){
//         console.log("Miaaaauuw miauuuuw");
//     }
// }

// var firulais = new Perro("Firulais","20KG","Pug","Cafe");
// var pelussa = new Gato("Pelussa","10Kg","Siames","Gris");

// pelussa.setNombre("Lola");
// pelussa.getNombre();
// pelussa.comer("Whiskas");


class Rectangulo{
    constructor(ancho,alto){
        this.ancho = ancho;
        this.alto = alto;
    }

    getArea(){
        return "el Area es: " + this.alto*this.ancho ;
    }
}

class Cuadrado extends Rectangulo{
    constructor(lado){
        super(lado,lado)
    }
}

var rectangulo = new Rectangulo(8,4);
var cuadrado = new Cuadrado(4);

var area = cuadrado.getArea();
console.log(area);