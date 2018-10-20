var express = require('express');
var app = express();

app.get('/users',(req,res) => {
    res.send("Ruta: Usuarios");
});

app.get('/users/:uid',(req, res) =>{ //OBTENER PARAMETROS 
    let {uid} = req.params; // let uid = req.params.uid;
    res.send("id obtenido es:" + uid);  
});

app.get('/busqueda',(req,res) => { //OBTENIENDO QUERY
    console.log(req.query);
    let {q, nombre} = req.query;
    res.send({q_query: q, nombre_query: nombre});
});

// 1Crear la ruta /suma que reciba como path dos numeros
// y retorne la suma de ellos
app.get('/suma/:n1/:n2',(req,res) => {
    let {n1,n2} = req.params;
    let sumaResultado = Number(n1) + Number(n2);
    res.send("El resltado de la suma es: "+ sumaResultado);
});

// 2Crear la ruta /multiplicacion que reciba como query 
// dos numeros y retorne la multiplicacion de ellos
app.get('/multiplicar', (req,res) => {
    let {n1,n2} = req.query;
    let multiplicacionResultado = Number(n1) * Number(n2);
    res.send("El resultado de la multiplcacion es: "+ multiplicacionResultado);
}); 

app.listen(3000,() => {
    console.log("Escuchando por puerto 3000");
})