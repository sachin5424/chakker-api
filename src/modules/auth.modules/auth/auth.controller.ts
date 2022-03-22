import express from 'express';
import {ResgisterUserInterFace,AdminLogininterFace} from '../interface/auth.interface';
import {validationResult} from 'express-validator';
import {userRegister,genrateJwttoken,findDataByEmail} from '../service/auth.service';

export default class AuthController  {
    constructor(){
    }
    async test(req: express.Request, res: express.Response,){
     try {
        console.log(req);
         const errors:any = validationResult(req);
         if(!errors.isEmpty()){
             return res.status(422).json({errors: errors.array()})
         }
        else{
            const payload:ResgisterUserInterFace = req.body;
           let options:any ={
                usernames: payload.username,
                email: payload.email,
                password: payload.password,
                firstName: payload.firstName,
                lastName: payload.lastName
           }
           console.log(options);
           await userRegister(options);
            //  await this._AuthService.userRegister(options)
            return res.status(200).json({ payload})
        }
     } catch (error:any) {
         const errorrResponse:any ={
             status:500,
             message:error.message
         }
         res.json(
             {
                   error:errorrResponse
             }
         )
     }
    }

    async AdminLogin(req: express.Request, res: express.Response){
        try {
        //     const errors:any = validationResult(req);
        //     if(!errors.isEmpty()){
        //         return res.status(422).json({errors: errors.array()})
        //     }
        //    else{
                const payload:AdminLogininterFace = req.body;
                const data:any = await findDataByEmail(payload.email);
                const token:any = await genrateJwttoken(data)
               return res.status(200).json({data:token})
        //    }
        } catch (error) {
            return res.status(500).json({error:error.message})
        }
    }
    
}
