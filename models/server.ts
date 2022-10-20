import express, { Application } from 'express';
import userRoutes from '../routes/users.routes';
import cors from 'cors';

import db from '../db/connection';

class Server {

    private app: Application;    
    private port: string;
    private apiPaths = {
        users: '/api/users'
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000';
        // Inicial methods
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection() {
        try {
            await db.authenticate();
            console.log('Database online');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }

    middlewares() {
        // Cors
        this.app.use( cors() )
        // Body read
        this.app.use( express.json() )
        // Public folder
        this.app.use( express.static('public'))
    }
    routes() {
        this.app.use( this.apiPaths.users, userRoutes );
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Serve runing in the port ${this.port}`);
            
        })
    }

}

export default Server;
