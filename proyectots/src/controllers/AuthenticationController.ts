import { Request,Response } from "express";
import { checkSchema } from "express-validator";
import AbstractController from "./AbstractController";
import UserModel from '../modelsNOSQL/userNOSQL';
import db from '../models';

class AuthenticationController extends AbstractController{
    protected validateBody(type: any) {
        throw new Error("Method not implemented.");
    }
    //Singleton
    //Atributo de clase
    private static instance:AuthenticationController;
    //Método de clase
    public static getInstance():AbstractController{
        if(this.instance){
            return this.instance;
        }
        this.instance = new AuthenticationController('auth');
        return this.instance;
    }

    protected initRoutes(): void {
        this.router.post('/signup', this.signup.bind(this));
    }

    private async signup(req:Request,res:Response){
        const {email,password,name, role} = req.body;
        try{
            //Create a new user in Cognito
            const user = await this.cognitoService.signUpUser(email,password,[
                {
                    Name: 'email',
                    Value: email
                }
            ])
            console.log("Usuario de cognito creado",user);
            res.status(201).send({message:"User signedUp"})
        }catch(error:any){
            res.status(500).send({code:error.code,message:error.message}).end()
        }
    }
}

export default AuthenticationController;