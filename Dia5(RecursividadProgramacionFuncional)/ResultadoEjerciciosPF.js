// Escribe una funcion que tome una cadena de palabras en mayusculas y la regrese en minusculas.
// 		Entrada: [“hola”,”como”,”estas”]
// 		Salida: [“HOLA”,”COMO”,”ESTAS”]
function mayMin(palabras){
    let palabrasMin = palabras.map((elem,ix,arr) => {
        return elem.toLowerCase();
    });
    console.log(palabras);
    console.log(palabrasMin);
}

let entrada = ['HOLA','COMO','ESTAS']; 
 //mayMin(entrada);

// Crea una funcion que reciba como parametro una cadena de palabras y devuelva la cadena de caracteres modificadas en mayusculas y minusculas.

// 		Entrada:[“Hola amigos”, “cinta roja cdmx y gdl”,” yei” ]
// 		Saloida:[“HOLA amigos”, “CINTA roja CDMX y GDL”,”YEI”]
function mayMin2(palabras){
    let palabrasMin = palabras.map((elem,ix,arr) => { //Iterar sobre cada oracion de mi lista array (elem)

        let oracionArrayOriginal = elem.split(' '); //convierto la oracion en un arreglo separado por cada palabra 

        let oracionArrayChanged = oracionArrayOriginal.map((elem,ix,arr) => { //itero cada palabra de mi arreglo 
           return (ix%2) ?  elem.toLowerCase() : elem.toUpperCase() ; //la convierto en mayusuculas si es par su indice y si no lo convierto en minusculas
        });

        let oracionArrayChangedToString = oracionArrayChanged.join(' '); //lo vuelvo a convertir en una oracion que devuelve una cadena y ya no es un array 

        return oracionArrayChangedToString; //lo retorno;
    });
    console.log(palabras);
    console.log(palabrasMin);
}

let entrada2 = ['Hola amigos', 'cinta roja cdmx y gdl','yei' ]; 
// mayMin2(entrada2);

// 3. Hacer un arreglo de 4 cantidades de tiempo en minutos [120, 80, 200, 100],
// y agarrar sólo las que son mayores a dos horas (hacer la comparación en horas)

function horasMayores2Horas(horas){
    let horasMayores = horas.filter((elem,ix,arr)=>{
         return elem > 120;
    });
    console.log(horas);
    console.log(horasMayores);
}


let horas = [120, 80, 200, 100];
// horasMayores2Horas(horas);

// 4.- A partir de esta lista [1, 3, 5, 7, 9], multiplicar todos los elementos por 7,
// y después sólo traer los que son menores a 30

function multiplicarPor7(lista){
    let listaNumerosPor7 = lista.map((elem,ix,arr) => {
        return elem * 7;
    });

    let listaNumerosMenoresA30 = listaNumerosPor7.filter((elem,ix,arr) => {
        return elem < 30;
    });

    console.log(lista);
    console.log(listaNumerosPor7);
    console.log(listaNumerosMenoresA30);
}

let lista = [1, 3, 5, 7, 9];
 //multiplicarPor7(lista);
