//1.- Crear un objeto de tipo Figura que herede 
//de tipo triangulo y rectangulo y que
 //compartan caracteristicas.
class Figura{
    constructor(nombre,lados){
        this.lados = lados;
        this.nombre = nombre;
    }

    getLados(){
        return this.lados;
    }

    setLados(lados){
        this.lados = lados;
    }
}

class Triangulo extends Figura{
    constructor(nombre,lados){
        super(nombre,lados);
    }
}

class Rectangulo extends Figura{
    constructor(nombre,lados){
        super(nombre,lados);
    }
}

var triangulo = new Triangulo("Triangulo",3);
console.log(triangulo.getLados());

var rectangulo = new Rectangulo("Rectangulo",4);
console.log(rectangulo.getLados());










// 2.-Crearemos una supeclase llamada Electrodomestico con las siguientes características:
// Sus atributos son precio, color, consumo energético y peso.
// El constructor debe de pedir precio, color y peso.

class Electrodomestico {
    constructor(precio, color, peso){
        this.precio = precio;
        this.color = color;
        this.peso = peso;
        this.consumo_energetico = 1142; //1,142 kw en el caso de la lavadora
    }

    getColor(){
        return "Color: " + this.color;
    }

    getPeso(){
        return "Peso: " + this.peso;
    }
}

// 3.- Crearemos una subclase llamada Lavadora con las siguientes características:
// Su atributo es carga(kg de ropa), ademas de los atributos heredados.
// Crear el metodo precioFinal() (El precio de el consumo energético por la carga)

class Lavadora extends Electrodomestico{
    constructor(precio, color, peso, carga){
        super(precio, color, peso);
        this.carga = carga;
    }

    precioFinal(){
        return "Precio final: " + this.consumo_energetico * this.carga;
    }
}

var miLavadora = new Lavadora(500, "azul", "15kg", 5);
console.log(miLavadora);
console.log(miLavadora.getColor());
console.log(miLavadora.getPeso());
 console.log(miLavadora.precioFinal());
