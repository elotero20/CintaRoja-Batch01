

//REQUESTS NASA API
//PRIMERO OBTENEMOS UNA API TOKENS
//6e9b18TiUtDRqAnWOX59KHYnovNOPTtQKwWfMzc0 KEY TOKEN
//const request = require('request');

//GET //https://api.nasa.gov/neo/rest/v1/feed?start_date=START_DATE&end_date=END_DA///TE&api_key=API_KEY
// const request = require('request');
// request.get('https://api.nasa.gov/planetary/apod?api_key=fk9cSJVJvmG5I0TVMdTXMjSaoOa2XJZDqzePkOIt',(error,response,body) => {
//     console.log('Error - ' + error);
//     console.log('Response -', response.statusCode)


//     if(response.statusCode === 200){
//         console.log("Peticion Exitosa!");
//         var json = JSON.parse(body);
//         console.log(json);
//     }
//     else{
//         console.log("Error Petición!!");
//     }
// });

//REQUESTS POKEMON API
//https://pokeapi.co/api/v1/pokedex/1/ TODOS LOS POKEMONES
// const request = require('request');
// request.get('http://pokeapi.co/api/v2/pokemon/151',(error,response,body) => {
//     console.log('Error - ' + error);
//     console.log('Response -', response.statusCode)


//     if(response.statusCode === 200){
//         console.log("Peticion Exitosa!");
//         var json = JSON.parse(body);
//         console.log(json.moves);
//     }
//     else{
//         console.log("Pokemon no encontrado");
//     }
// });

//REQUESTS GOOGLE API
//GET KEY GOOGLE AIzaSyBmOqBt4nFSHjXYGseh0lcmVxbX9OR6jIk 
const request = require('request');
function getDirection(direccion){
    return new Promise((resolve, reject) => {
        let direccionQuery = direccion.replace(" ","+");
        request.get("https://maps.googleapis.com/maps/api/geocode/json?"+
        "address="+direccionQuery+"&key=AIzaSyBmOqBt4nFSHjXYGseh0lcmVxbX9OR6jIk",
        (error,response,body) => {
            response.statusCode == 200 
            ? resolve(JSON.parse(body)) 
            : reject('Error en la peticion');
        });
    });
}

getDirection("San Melessio 4")
.then((result) => {
    console.log(result.status);
    console.log(result);
})
.catch((error) => {console.log(error)})

//REQUESTS STAR WARS API
// const request = require('request');
// request.get('https://swapi.co/api/people/1/',(error,response,body) => {
//     console.log('Error - ' + error);
//     console.log('Response -', response.statusCode)


//     if(response.statusCode === 200){
//         console.log("Peticion Exitosa!");
//         var json = JSON.parse(body);
//         var personaje = {
//             nombre: json.name,
//             genero: json.gender
//         };
//         console.log(personaje);
//     }
//     else{
//         console.log("personaje no encontrado");
//     }
// });