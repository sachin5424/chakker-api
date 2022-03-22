import express from 'express';
import AuthController from './auth/auth.controller';
import {RegisterValidator,adminLoginValidation } from './validations/register';
import {checkValidResponse} from '.././middleware/checkValidResponse'
const routers:express.Router = express.Router();


const authController = new AuthController
const Router:any =[
    routers.post("/auth",RegisterValidator,checkValidResponse,authController.test),
    routers.post("/private/admin/login",adminLoginValidation,checkValidResponse,authController.AdminLogin)
];

const AuthRouters = routers

export default  AuthRouters
