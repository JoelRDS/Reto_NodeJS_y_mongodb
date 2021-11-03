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
app.use(express.urlendoded({extended: true}));
app.use(express.json());

//Conexión a base de datos
mongoose.connect("mongodb+srv://prog_web:ProgWebMintic2022@clusterprogweb.okrdk.mongodb.net/RetO2bd?retryWrites=true&w=majority");

//Operaciones CRUD
router.get('/',(req,res) => {
    res.send("El inicio de mi API Rest")
});




app.listen(3000, ()=>{
    console.log("el servidor se esta ejecutando en el puerto 3000")

});