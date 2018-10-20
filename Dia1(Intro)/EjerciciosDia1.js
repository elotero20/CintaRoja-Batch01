
// var hora = 2 , msg;
// if(hora < 18){
//     msg = "Buenos Días";
// }
// else{
//     msg = "Buenas Tardes";
// }

// console.log(msg);

// for(i=0; i <= 4 ; i++){
//     console.log(i);
// }



function div(){
    var num1=1, num2 =1;
    var divRes = num1/num2;

    if(divRes%1 == 0){ //0
        console.log(divRes%1 + " MODULO")
        console.log( divRes + " ES EXACTA")
    }
    else{//0.5
        console.log(divRes%1 + " MODULO")
        console.log(divRes + " NO ES EXACTA")
    }
}

div(); //1