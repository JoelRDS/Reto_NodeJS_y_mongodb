const mongoose = require('mongoose');

let TareaSchema = new mongoose.Schema({

    TipoDocumento: String,
    DocumentoIdentificación: Number,
    Nombres: String,
    Apellidos : String,
    Dirección: String,
    CorreoElectrónico: String,
    TeléfonoFijo: String,
    TeléfonoCelular: String,
    EnlaceSitioWeb: String,
    DescripciónDelPerfil: String

});

// esto es para exponerlo al exterior
module.exports = mongoose.model('tarea', TareaSchema, 'Tareas')