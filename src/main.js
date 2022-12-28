import express from 'express';
const app = express();
import { AppDataSource } from './data-source.js';
import apiRouter from './routes/router.js';

AppDataSource.initialize().then(async () => {
    
    app.use('/api', apiRouter);
    
    app.listen(4000, () => {
        console.log('Server listening on port 4000');
    });

});