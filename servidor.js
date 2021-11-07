// librerias
// se hace un import de la funcionalidad del paquete express, y se lo asigno a una constante llamada 'express'
const express = require('express');
//importamos mongoose una vez instalado el paquete en la terminal
const mongoose = require('mongoose');

const TareaSchema = require('./Modelos/Tarea.js');

// se define una variable o constante 'app', que es una instancia de express para poder
//inicializar un servidor web
const app = express();
//rutas
const router = express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Conexión a base de datos
mongoose.connect("mongodb+srv://prog_web:ProgWebMintic2022@clusterprogweb.okrdk.mongodb.net/RetO2bd?retryWrites=true&w=majority");

//Operaciones CRUD

//el metodo get es para poder consultar los elementos que tenemos almacenados.
router.get('/',(req,res) => {
    res.send("El inicio de mi API Rest")
});


router.get('/tarea', (req, res) => {
    TareaSchema.find(function(err,datos){
        if(err){
            console.log("Error leyendo las tareas");

        }else{
            res.send(datos);
        }
    })
} )
//metodo post = es crear un registro en la base de datos.
router.post('/tarea', (req, res) => {
    let nuevaTarea = new TareaSchema({
    TipoDocumento: req.body.tipodoc,
    DocumentoIdentificación: req.body.id,
    Nombres: req.body.nombre,
    Apellidos : req.body.apellido,
    Dirección: req.body.direccion,
    CorreoElectrónico: req.body.correo,
    TeléfonoFijo: req.body.telefonoF,
    TeléfonoCelular: req.body.telefonoC,
    EnlaceSitioWeb: req.body.enlace,
    DescripciónDelPerfil: req.body.descripcion
    });
// damos la instruccion a la nueva tarea de guardar
nuevaTarea.save(function(err, datos){
    if(err){
        //si existe algun eror se mostrara el error
        console.log(err);
    }
    res.send("Usuario Almacenado")
})

});

   //metodo update

   router.post('/tarea_update', function (req, res) {
    let body = req.body;
    TareaSchema.updateOne({ _id: body._id },
        {
            $set: req.body
        },
        function (err, datos) {
            if (err) {
                console.log(err);
            }
            res.send("Tarea actualizada correctamente.")
        })
});

//metodo delete

router.delete('/tarea_delete', function(req, res) {
    let body = req.body;
    TareaSchema.deleteOne({_id: body._id}, function(err, datos){
        if(err){
            console.log(err);
        }
        res.send("Tarea Eliminada correctamente")
    })
})

app.use(router);
app.listen(3000, ()=>{
    console.log("el servidor se esta ejecutando en el puerto 3000")

});