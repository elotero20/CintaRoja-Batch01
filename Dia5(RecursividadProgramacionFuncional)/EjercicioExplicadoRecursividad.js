// 1. Sumar los números números naturales hasta N 
// (se lo damos nosotros) de forma recursiva.

//Sin Recursividad
var sumaNumerosNaturales = (n) => {
    let suma = 0;
    while(n>0){
        suma = n + suma;
        n--; // n = n -1; 
    }
    return suma;
}

//Con Recursividad
var sumaNumerosNaturalesRecursivo = (n) => {
    if(n == 0){
        //Termina la Recursión siempre el primer if
        return 0;
    }
    else{
        return n + sumaNumerosNaturalesRecursivo(n-1);
    }
}


// console.log(sumaNumerosNaturales(5));
// console.log(sumaNumerosNaturalesRecursivo(5));

//2. Calcular el Factorial de un numero n
//n = 5 => 5*4*3*2*1 = 120
var factorial = (n) => {
    let resultado = 1;
    while(n >= 1){
        resultado = n * resultado;
        n--;
    }
    return resultado;
}

var factorialRecursivo = (n) => {
    if(n == 0){
        //Termina la Recursividad
        return 1;
    }
    else{
        return n * factorialRecursivo(n-1);
    }
}

console.log(factorial(5));
console.log(factorialRecursivo(5));


