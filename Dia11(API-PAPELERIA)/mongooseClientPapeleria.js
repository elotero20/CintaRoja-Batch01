const mongoose = require('mongoose')

const Schema = mongoose.Schema,
    objectId = Schema.ObjectId


const articuloSchema = new Schema({
    articulo: objectId,
    nombre: String,
    precio: Number,
    existencia: Number,
    descripcion: String
});

const facturaSchema = new Schema({
    factura: objectId,
    rfc: String,
    articulos_comprados: [],
    subtotal: Number,
    iva: Number,
    total:Number
});

var Articulo = mongoose.model('Articulo',articuloSchema);
var Factura = mongoose.model('Factura', facturaSchema);

var gralSchema = {Articulo: Articulo, Factura: Factura}

module.exports = gralSchema;