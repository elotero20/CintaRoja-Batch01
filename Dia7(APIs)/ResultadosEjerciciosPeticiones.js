const request = require('request');

function peticionLibro(nombre_libro){
    nombre_libro = nombre_libro.replace(" ","+");
    request.get('http://openlibrary.org/search.json?q='+nombre_libro, (error,response,body) =>{
        if(response.statusCode == 200){
            var jsonResult = JSON.parse(body);
            var libro = jsonResult.docs[5];
            var autores = libro.author_name;

            var libroEncontrado = {
                nombre_libro: libro.title,
                autores_libro: autores
            }

            console.log(libroEncontrado);
        }else{
            console.log("Error en Peticion");
        }
    }
)}

peticionLibro("game of thrones");