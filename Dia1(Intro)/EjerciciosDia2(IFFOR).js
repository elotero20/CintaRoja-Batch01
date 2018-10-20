// IF
// 1. Escriba un programa que pida dos números enteros y que calcule su división, escribiendo si la división es exacta o no.
// 2 Escriba un programa que pida dos números y que conteste cuál es el menor y cuál el mayor o que escriba que son iguales.
function validaNumeros(num1,num2){
    if(num1 < num2){
        console.log(num1 + ' es menor.' );
        console.log(num2 + ' es mayor.' );
    }else if(num2 < num1){
        console.log(num2 + ' es menor.' );
        console.log(num1 + ' es mayor.' );
    }else{
        console.log(num1 + ' y ' + num2 +' son iguales.' );

    }
}

//validaNumeros(10,2);

// 3. Escriba un programa que pida el año actual y un año cualquiera y que escriba cuántos años han pasado desde ese año o cuántos años faltan para llegar a ese año.
function clacularAños(añoActual,añoCualquiera){
    if(añoActual > añoCualquiera){
        var añosPasados = añoActual - añoCualquiera;
        console.log("Han pasado: " + añosPasados + ' años');
    }else{
        var añosFaltantes = añoCualquiera - añoActual;
        console.log("Faltan : " + añosFaltantes + ' años para llegar a ese año');
    }
}

//clacularAños(2018,1992);

// 4. Escriba un programa que pida tres números y que escriba si son 
//los tres iguales, si hay dos iguales o si son los tres distintos.
function numerosIguales(num1,num2,num3){
        if(num1 == num2 && num1 == num3){
            console.log(num1 + ' , ' + num2 +' y ' + num3 + ' son iguales.' );
        }else if(num1 == num2){
            console.log(num1 + ' y ' + num2 + ' (numero 1 y numero 2) son iguales.' );
        }else if(num1 == num3){
            console.log(num1 + ' y ' + num3 + ' (numero 1 y numero 3) son iguales.' );
        }else if(num2 == num3){
            console.log(num2 + ' y ' + num3 + ' (numero 2 y numero 3) son iguales.' );
        }else{
            console.log(num1 + ' , ' + num2 +' y ' + num3 + ' son distintos.' );
        }
    
}
//numerosIguales(20,30,2);

// 5. Pedir tres números y obtener el mayor de ellos.
function numeroMayor(num1,num2,num3){
    if(num1 > num2 && num1 > num3){
        console.log(num1 + ' es mayor.' );
    }else if(num2 > num1 && num2 > num3){
        console.log(num2 + ' es mayor.' );
    }else if(num3 > num1 && num3 > num2){
        console.log(num3 + ' es mayor.' );
    }else{
        console.log("no cumple con ninguna condicion")
    }
}

//numeroMayor(5,10,10);

// 6. Pedir tres números y obtener el mayor de ellos o si son iguales
function numeroMayorOIguales(num1,num2,num3){
    if(num1 > num2 && num1 > num3){
        console.log(num1 + ' es mayor.' );
    }else if(num2 > num1 && num2 > num3){
        console.log(num2 + ' es mayor.' );
    }else if(num3 > num1 && num3 > num2){
        console.log(num3 + ' es mayor.' );
    }else{

        if(num1 == num2 && num2 > num3){
            console.log(num2 + ' es mayor.' );
        }else if(num1 == num3 && num3 > num2){
            console.log(num3 + ' es mayor.' );
        }else if(num2 == num3 && num3 > num1){
            console.log(num3 + ' es mayor.' );
        }else{
            console.log(num1 + ' , ' + num2 +' y ' + num3 + ' son iguales.' );
        }
    }
}

//numeroMayorOIguales(30,10,30);


// FOR
// 1. Imprimir del 1 al 10000
function del1al100(){
    for(var x = 1; x <= 1000; x++){
        console.log(x);
    }
}

//del1al100();

// 2. Imprimir los números pares del 1 al 100
function numerosPares1al100(){
    for(var x = 1; x <= 100; x++){
        if(x%2 == 0){
         console.log(x + ' es par');
        }
    }
}

//numerosPares1al100();

// Crea la suma de todos los números pares del 1 al 3000
function sumaNumerosPares1al3000(){
    var suma = 0;

    for(var x = 1; x <= 3000; x++){
        if(x%2 == 0){
          suma += x;
        }
    }

    console.log('La suma de todos los números pares del 1 al 3000 es: ' + suma);
}

//sumaNumerosPares1al3000();
