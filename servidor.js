// librerias
// se hace un import de la funcionalidad del paquete express, y se lo asigno a una constante llamada 'express'
const express = require('express');
// se define una variable o constante 'app', que es una instancia de express para poder
//inicializar un servidor web
const app = express();

//Conexión a base de datos


//Operaciones CRUD


app.listen(3000, ()=>{
    console.log("el servidor se esta ejecutando en el puerto 3000")

});