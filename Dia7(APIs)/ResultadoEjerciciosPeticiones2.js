// Hacer una petición por autor y devolver la lista de sus
//  libros (http://openlibrary.org/search.json?author=asimov)
const request = require('request');

function getBooksByAuthor(author){
    author = author.replace(' ', '+');
    request.get('http://openlibrary.org/search.json?author='+author,(error, response, body) =>{
        if(response.statusCode == 200){
            var jsonresult = JSON.parse(body);
            var libros = jsonresult.docs;
            var nameLibros = libros.map(function(elem){
                return elem.subject;
            });
            console.log(nameLibros);
        }else{
            console.log("Error en petición!");
        }
    })
}

getBooksByAuthor("Brian");