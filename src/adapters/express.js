const express = require("express");
var app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());




class Express{
    constructor(repositorio){
        this.repositorio = repositorio;
    }
    
    
    async escucharPuerto(puerto){
        app.listen(puerto,()=>{
            console.log("Escuchando puerto: " + puerto);
        })
    }

    inicializarServidor(puerto){
        app.options('*',cors());
        this.definirRutasEmpleado();
        this.definirRutasDeBoleto();
        this.escucharPuerto(puerto);
    }
}



module.exports = Express


