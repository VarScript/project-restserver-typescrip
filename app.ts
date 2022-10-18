import dotenv from 'dotenv'
import Server from './models/serve';


// config dotenv
dotenv.config();

const server = new Server();

server.listen();
