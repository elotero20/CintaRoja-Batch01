var express = require('express');
var app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get('/',function(req,res){
    res.send("Haciendo Get al Servidor!");
});

app.post('/',function(req, res){
    res.send("Haciendo Post!");
});

app.put('/',function(req,res){
    res.send("Haciendo Put!");
});

app.delete('/',function(req,res){
    res.send("Haciendo Delete!");
});

app.listen(3000,function(){
    console.log("Escuchando por el puerto 3000!")
});
