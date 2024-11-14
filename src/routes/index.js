import { Router } from 'express';

export const routes = Router();

routes.get('/', (req, res) => {
    res.send("What's up doc ?!");
});