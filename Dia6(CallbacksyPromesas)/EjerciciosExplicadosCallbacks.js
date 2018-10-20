//IF CONFICIONAL TERNARIO
var x = 10;

if(x == 10) {
    console.log('Es 10');
}
else{
    console.log('No es 10');
}

//FUNCIONAL YA EN VARIOS FW ACTUALES NO SE UTILIZAN COMO FOR IF
//AHORA UTILIZAN FUNCIONES COMO MAP, FILTER, FIND, ETC
var y = (x == 10) ? 'Es 10' : 'No es 10'
console.log(y);



//Callback Explicacion Async

// console.log(1);
// console.log(2);
// console.log(3);

// console.log("Tarea 1")
// setTimeout(()=>{
//     console.log("Tarea 2")
//     },5000)
// console.log("Tarea 3")


//Cuello de botella
//Se toma cada una de las lieas y funciona como una lista(FIFO), es interetado empieza linea por linea a resolver el codigo
//Cuando llega a una parte o tarea donde que tomara tiempo en resolverse lo manda a una pila(LIFO) y continua
//Puede que las tareas de la pila finalicen antes que una tarea de la lista, pero no se puede retornar a la lista
// console.log("Tarea 1")
// setTimeout(()=>{
//     console.log("Tarea 2 (Pasaron 1 seg)")
// },1000)
// for(let i =0; i < 9999999999; i++);
// console.log("Tarea 3");


//EJEMPLO 1
function hagoAlgo(nombre,apodo,callback) {
    console.log('Hola!! ' + nombre);
    callback(nombre,apodo);
}

function mostrarApodo(apodo){
    console.log('Su apodo es: ' + apodo);
}

//CREAMOS Y PASAMOS LA FUNCION 
hagoAlgo('Luis','el frijojes', function(nombre, apodo){
    console.log('Como estas '+nombre+' ?');
    mostrarApodo(apodo);
});

//OPCION PASANDO FUNCION DEFINIDA
function saluda(nombre, apodo){
    console.log('Como estas '+nombre+' ?');
    mostrarApodo(apodo);
}

hagoAlgo('Martin','el señor',saluda);



//EJEMPLO 2
function hacerTarea(materia, callback){
    console.log("Empezando mi tarea de " + materia);
    callback(materia);
  }

//   hacerTarea('Español', function (materiaRetorno){
//     console.log('Termine mi tarea de ' + materiaRetorno);
//   } );


  function tareaTerminada(materia){
    console.log('Termine mi tarea de ' + materia);
  }

 // hacerTarea('Español', tareaTerminada);

// Empezando mi tarea de Español
// Termine mi tarea de Español


//EJEMPLO 3

function callback1(){
        console.log('primer callback');
    }

function callback2(){
        console.log('segundo callback');
    }

function callback3(){
        console.log('tercer callback');
    }

function funcionPrincipal(callback1, callback2, callback3){
    //código de la función principal
    callback1();
    //más código de la función principal
    callback2();
    //más código de la función principal
    callback3();
    //más código si fuera necesario
}

funcionPrincipal(callback1, callback2, callback3);


//EJEMPLO 4 CON PARAMETROS

function paso1(quePaso){
     console.log(quePaso);
}

function paso2(quePaso){
    console.log(quePaso);
}

function termino(queHizo){
     console.log(queHizo);
}

function laUltimaYnosVamos(msg){
    console.log(msg);
}

function haceAlgo(callbackPaso1, callbackPaso2, callbackTermino, callback4){
    //algo aca
    callbackPaso1('Iniciando pasos');
    //sigo... algo aca
    callbackPaso2('paso 2');
    //sigo ... y termino
    callbackTermino('terminó');
    callback4("YA VAMONOSSS");
}

//haceAlgo(paso1, paso2, termino, laUltimaYnosVamos);


//Callback hell
//Realizar la suma de dos numeros
//El resultado lo elevamos al cuadrado
//El resultado lo dividimos entre 2
//El resultado validamos si es mayor a 0

function sumar(num1,num2,callback){
    let resultado = num1 + num2;
    callback(resultado);
}

function cuadrado(resultado,callback){
    let resultadoAlCuadrado = resultado * resultado;
    callback(resultadoAlCuadrado);
}

function dividir(resultado, callback){
    let resultadoEntreDos = resultado / 2;
    callback(resultadoEntreDos);
}

function esMayorACero(resultado, callback) {
    let resultadoMayorACero = resultado > 0 ? true : false;
    callback(resultadoMayorACero);
}


//Callback hell
//Funcion sin literal produciendo callback hell
// sumar(8,5,function(resultadoSumar){
//     console.log('La suma es :' + resultadoSumar);
//     cuadrado(resultadoSumar, function(resultadoAlCuadrado){
//         console.log('El resultado al cuadrado es: ' +resultadoAlCuadrado);
//         dividir(resultadoAlCuadrado,function(resultadoEntreDos){
//             console.log('El resultado entre 2 es: ' + resultadoEntreDos);
//             esMayorACero(resultadoEntreDos, function(resultadoMayorACero) {
//                 console.log('El resultado es mayor a 0?' + resultadoMayorACero);
//             });

//         });
//     });
// });


//Evitando el callback hell
function callbackSumar(resultadoSumar){
    console.log('La suma es :' + resultadoSumar);
    cuadrado(resultadoSumar,callbackCuadrado);
}

function callbackCuadrado(resultadoAlCuadrado){
        console.log('El resultado al cuadrado es: ' + resultadoAlCuadrado);
        dividir(resultadoAlCuadrado,callbackDividir);
}

function callbackDividir(resultadoEntreDos){
        console.log('El resultado entre 2 es: ' + resultadoEntreDos);
        esMayorACero(resultadoEntreDos,callbackEsMayorACero);
}

function callbackEsMayorACero(resultadoMayorACero) {
     console.log('El resultado es mayor a 0?  ' + resultadoMayorACero);
}

//sumar(8,5,callbackSumar);



function suma(num1,num2,callback){
    let resultadoSuma = num1 + num2;
    console.log("Resultado suma :" + resultadoSuma);
    callback(resultadoSuma);
}

function dividir(numero){
    let resultadDivision = numero / 2;
    console.log("El resultado de la division:" + resultadDivision);
}

suma(5,5,dividir);