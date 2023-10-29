import type { Request, Response, NextFunction, Router, Express, RequestHandler } from 'express';
import path from 'path';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { appendFile } from 'fs';
import postsController  = require('./controllers/postsController');

const app: Express = express();
const PORT: string | number = process.env.PORT || 3000;

app.use(express.json() as RequestHandler);
app.use(express.urlencoded({ extended: true }) as RequestHandler)
app.use(cors() as RequestHandler)
dotenv.config();

app.get('/', (req: Request, res: Response) => {
    return res.send("Response from Server!")
})

app.get('/posts', postsController.getPosts,(req: Request, res: Response) => {
    return res.status(200).json(res.locals.posts);
})

app.listen(PORT, () => {
    console.log(`************************* EXPRESS server is listening on http://localhost:${PORT}/`);
	console.log(`************************* Frontend listening on  http://localhost:${5173}/`);
})