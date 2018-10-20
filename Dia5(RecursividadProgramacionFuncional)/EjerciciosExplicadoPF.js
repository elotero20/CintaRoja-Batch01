var lista = [1,3,2,5,4,6,8,9,0,7]
lista.map((x,y,z) => {
   // console.log(x);
});

var listObj = [
    {nombre:"luis", cinta:"roja"},
    {nombre:"diego", cinta:"blanca"},
    {nombre:"ana", cinta:"blanca"},
    {nombre:"alan", cinta:"negra"}
]

var listObjCop = listObj.filter(function(elem){
    return elem.cinta == "blanca";
});

// console.log(listObjCop);

var tasks = [
    {
        name :"act1",
        duration : 60
    },
    {
        name :"act2",
        duration : 80
    },
    {
        name :"act3",
        duration : 160
    }
]

let nuevaLista = tasks.filter((x,y,z) => {
    return x.duration > 90
});

// console.log(nuevaLista);

var stringOriginal = "Hola como estas";
var stringOriginalArray = stringOriginal.split(' ');
console.log(stringOriginal);
console.log(stringOriginalArray);