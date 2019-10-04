import express from 'express'; 
let app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

 class Express{

    constructor(){
    }
    
    async defineRoutes(){
        app.get("/",(request, response)=>{
            response.send("hola");
        })

        app.get("/notifyUser",(request, response)=>{
            response.send("1");
        })
    }
    
    async listenPort(port){
        app.listen(port,()=>{
            console.log("Listening port: " + port);
        })
    }

    async initializeServer(port){
        app.options('*',cors());
        this.defineRoutes();
        this.listenPort(port);
    }
}


module.exports = Express


