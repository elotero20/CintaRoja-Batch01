// const mongoose = require('mongoose');
// mongoose.connect('mongodb://admin:mypass123@ds119702.mlab.com:19702/my_first_database');
// console.log(mongoose.connection.readyState); // tiene que tirar 2

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://admin:mypass123@ds119702.mlab.com:19702/my_first_database';
mongoose.connect(dev_db_url,{useNewUrlParser:true});
console.log(mongoose.connection.readyState); 
// 2 es OK es conexión Exitosa



// const Schema = mongoose.Schema,
//     objectId = Schema.ObjectId


// const alumnoSchema = new Schema({
//     alumno: objectId,
//     nombre: String,
//     apellidos: String,
//     edad: Number,
//     email: String,
//     city: String 
// });

// var Alumno = mongoose.model('Alumno',alumnoSchema);

// module.exports = Alumno;