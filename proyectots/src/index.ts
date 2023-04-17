import Server from "./providers/Server";
import express from "express";
import cors from 'cors';
import UserController from "./controllers/UserController";

const app = new Server({
    port:8080,
    middlewares:[
        express.json(),
        express.urlencoded({extended:true}),
        cors()
    ],
    controllers:[
        UserController.getInstance()
    ],
    env:'development'
});

app.init();