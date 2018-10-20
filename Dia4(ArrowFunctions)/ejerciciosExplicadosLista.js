// var alumnos = ["Lucia","Luis","Paola"]

// console.log(alumnos);

// alumnos.push("Oscar");
// alumnos.push("Diego");
// console.log(alumnos);
// console.log(alumnos.length);

// var alumno = alumnos[2];
// console.log(alumno);

// var indexPaola = alumnos.indexOf("Paola");
// var paola = alumnos[indexPaola];
// console.log( paola);


// var indexAlumnoDelete = alumnos.indexOf("Paola");
// alumnos.splice(indexAlumnoDelete,2);
// console.log(alumnos);

// alumnos.forEach(function(e,i,arr){
//     console.log(e);
// });

// var luis = {nombre : 'luis', calificacion: 80}
// var diego = {nombre: 'diego', calificacion: 90}
// var alumnosCalificacion = []

// alumnosCalificacion.push(luis);
// alumnosCalificacion.push(diego);
// // console.log(alumnosCalificacion);

// alumnosCalificacion.forEach(function(elem,index,arr){
//     var alumno = elem;

//     console.log(alumno.calificacion, index,arr);
// });

// console.log(alumnosCalificacion[0])


function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

console.log(validateEmail("luis.bravogmail.com"));