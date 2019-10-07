import express from 'express'; 
let app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

 class Express{

    constructor(){
        this.userWantsToFeedCat = 0;
        this.catIsHungry = 0;
    }
    
    async defineRoutes(){
        

        app.get("/notifyUser",(request, response)=>{
            if(this.catIsHungry){
                response.send("1");
            }else{
                response.send("0");
            }
        })

        app.post("/userWantsTofeedCat",(request, response)=>{
            this.userWantsToFeedCat = request.body.resp;
        })

        app.get("/feedCat",(request, response)=>{
            if(this.userWantsToFeedCat){
                response.send("1");
            }else{
                response.send("0");
            }
        })

        app.post("/catIsHungry",(request,response)=>{
            this.catIsHungry = request.body.resp;
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


