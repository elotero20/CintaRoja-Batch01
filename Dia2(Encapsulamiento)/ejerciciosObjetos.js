class Perro{

    constructor(color,pelaje,raza,tamano){
        //ATTRIBUTOS
        this.color_perro = color;
        this.pelaje_perro = pelaje;
        this.raza_perro = raza;
        this.tamano_perro = tamano;
    }

    //METODOS
    nacer(){
        console.log("Ya naci");
    }

    ladrar(){
        console.log("wooof woof");
    }

    getColor(){
        console.log(this.color_perro);
    }

    setColor(color){
        this.color_perro = color;
        console.log("Nuevo Color :" + this.color_perro);
    }
}

var firulais = new Perro("Blanco","Lacio","Chihuahua","Mediano");
// firulais.nacer();
// firulais.ladrar();
firulais.getColor();
firulais.setColor();
firulais.getColor();
