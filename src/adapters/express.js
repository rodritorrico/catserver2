import express from 'express'; 
let app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());
app.use(bodyParser.text());

 class Express{

    constructor(){
      
    }
    
    async defineRoutes(){

        let userWantsToFeedCat = false;
        let catIsHungry = false;
        

        app.get("/notifyUser",(request, response)=>{
            if(catIsHungry){
                response.send(true);
            }else{
                response.send(false);
            }
        })

        app.post("/userWantsTofeedCat",(request, response)=>{
            // console.log(request.body.resp);
            if(request.body.resp === "true"){
                catIsHungry = true;
            }else{
                catIsHungry = false;
            }
            userWantsToFeedCat = request.body.resp;
            response.send(200);
        })

        app.get("/feedCat",(request, response)=>{
            // console.log(userWantsToFeedCat);/
            if(userWantsToFeedCat){
                response.send(true);
            }else{
                response.send(false);
            }
        })

        app.post("/catIsHungry",(request,response)=>{
            if(request.body === "0"){
                catIsHungry = false;
            }else{
                catIsHungry = true;
            }
            console.log(request.body);
            response.send(200);
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


