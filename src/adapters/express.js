import express from 'express'; 
var app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());




export class Express{
    constructor(){
    }
    
    
    async listenPort(port){
        app.listen(port,()=>{
            console.log("Listening port: " + port);
        })
    }

    initializeServer(port){
        app.options('*',cors());
        this.definirRutasEmpleado();
        this.definirRutasDeBoleto();
        this.listenPort(port);
    }
}



