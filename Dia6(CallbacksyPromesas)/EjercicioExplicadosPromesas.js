//declaracion de la promesa
const promesa = new Promise((resolves,rejects) =>{
    const numero = 3;
    setTimeout(()=>{
        if (numero > 5){
            resolves('Si es mayor a 5')
        }else{
            rejects('No es mayor a 5')
        }
    },2000);    
});

promesa
.then(result => {
    console.log(result);
    exitoso();
})
.catch(err =>{
    console.log("error: "+ err);
    error();
})


function exitoso(){
        console.log("OK");
}

function error(){
    console.log("ERROR");
}