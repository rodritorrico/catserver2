import Express from './adapters/Express';
import ServerRepository from './repositories/ServerRepository';



let express = new Express();
let serverRepository= new ServerRepository(express);

serverRepository.initializeServer(3000);