var express = require('express');
var app = express();

app.get('/',(req,res) => {
    res.send("Haciendo Read");
});

app.post('/', (req,res) => {
    res.send("Haciendo Create");
});

app.put('/', (req,res) => {
    res.send("Haciendo Update");
});

app.delete('/',(req,res)=>{
    res.send("Haciendo Delete");
});

app.listen(3000,() =>{
    console.log("Escuchando por el puerto 3000");
});