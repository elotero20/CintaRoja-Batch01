// Hacer una función que convierta de grados centígrados a Farenheit.
var CF = (C) => (C * 9/5) + 32;
// console.log(CF(27));

// Hacer una función que muestre la tabla de multiplicar de un número.
var tabla = (numero) => { 
    for(let x=0; x <= 10; x++){
        console.log(numero + "x" + x + ":" + numero*x);
    }
}
//tabla(4);

// Función que pida N parametros y devuelva cuantos parametros se le pasaron
var nParametrosLength = (...params) => console.log(params.length);
// nParametrosLength(2,2,3,4,5,6,7)

// Leer un array de enteros y sacar su media
var mediaArray = (enteros) => {
    var total = 0;
    console.log(enteros.length);

    for(let x = 0; x < enteros.length; x++){
        console.log(enteros[x]);
        total = total + enteros[x];
        console.log(total,"total");
    }

    console.log(total);
    var media = total / enteros.length;
    return media;
}

//console.log(mediaArray([1,2,3,4,5,6,7,8,9,10]))

