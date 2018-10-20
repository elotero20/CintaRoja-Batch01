// Leer el nombre y sueldo de 8 empleados y mostrar el nombre y sueldo del 
//empleado que más gana.
class Empleado{
    constructor(nombre,sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    getNombre(){
        return this.nombre;
    }

    getSueldo(){
        return this.sueldo;
    }
}

var listaEmpleado = [];

for(let x = 1; x <= 8; x++){
    var empleado = new Empleado("Empleado"+x,10000 * x);
    listaEmpleado.push(empleado);
}

var empleadoMasGana = (Empleados) => {
    var empleado = "";
    var sueldo = 0;

    for(let i = 0; i < Empleados.length; i++){
        if(Empleados[i].getSueldo() > sueldo){
            sueldo = Empleados[i].getSueldo();
            empleado = Empleados[i].getNombre();
        }
    }

    console.log("El empleado que mas gana es: " + empleado + " con un suedo de :" + sueldo);
    
}

// empleadoMasGana(listaEmpleado);