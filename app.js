import express from 'express';
import dotenv from 'dotenv';
import { routes } from './routes/index.js';

const app = express();
dotenv.config();

// routes
app.use('/', routes);

// start the server
app.listen(process.env.BACK_PORT, () => {
    console.log(
        `server running : http://${process.env.BACK_HOST}:${process.env.BACK_PORT}`
    );
});