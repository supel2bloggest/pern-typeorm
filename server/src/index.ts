
import "reflect-metadata";
import { createConnection } from "typeorm";

import express from 'express';
import {Request, Response} from "express"; 
import {Routes} from "./routes"

import * as APP_ENV from './config/app';

const app = express();

createConnection().then(async connection => {
    app.get('/', (req: Request, res: Response) => {
        res.send('THIS IS API SERVER EXPRESS!');
    });

    // register express routes from defined application routes 
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : res.status(500).send('error'));
            } else if (result !== null && result !== undefined) { 
                result.json(result);
            }
        });
    });

    app.listen(APP_ENV.PORT, () => {
        console.log(`The application run on ${APP_ENV.ENVIRONMENT} is listening on port ${APP_ENV.PORT}!`);
    })
}).catch(error => console.log(error));
