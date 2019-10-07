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

        let userWantsToFeedCat;
        let catIsHungry;

        app.get("/",(request, response)=>{
            response.send("hola");
        })

        app.get("/notifyUser",(request, response)=>{
            if(catIsHungry){
                response.send("1");
            }else{
                response.send("0");
            }
        })

        app.post("/userWantsTofeedCat",(request, response)=>{
            userWantsToFeedCat = request.body.resp;
        })

        app.get("/feedCat",(request, response)=>{
            if(userWantsToFeedCat){
                response.send("1");
            }else{
                response.send("0");
            }
        })

        app.post("/catIsHungry",(request,response)=>{
            catIsHungry = request.body.resp;
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


