import { Request, Response } from 'express';
import { CreateUserInterface } from '../interface/user-permission.interface'
import {
     getPermissionService, 
     AddPermissionService,
     checkPermission,
     allPermissionsService,
     chekcUserPermissions ,
     checkUsersPermissionsService} 
from '../services/user-permission.service'
import mongoose from 'mongoose'

export default class UserPermissionController {
    constructor() {

    };

    async createUserPermission(req: Request, res: Response) {
        try {
            const payload: any = req.body;

            for (let index = 0; index < payload.permissions.length; index++) {
                let options: CreateUserInterface = {
                    userId: payload.userId,
                    permissionId: payload.permissions[index]
                };
                await AddPermissionService(options);
            }

            return res.status(200).json({ status: 200, message: "create user permission successfully" });
        } catch (error) {
            return res.status(500).json({ status: 500, error: error.message })
        }
    }
    async ListUserPermission(req: Request, res: Response) {
        try {

            const data = await getPermissionService()
            return res.status(200).json({ data })
        } catch (error) {
            return res.status(500).json({ error: error.message, status: 500 })
        }
    }
    async AddUserPermission(req: Request, res: Response) {
        try {
            const data: any = req.body;
        } catch (error) {
            return res.status(500).json({ error: error.message, status: 500 })
        }
    }

    async checkModulesPermission(req: Request, res: Response) {
        try {
            const getRequest:any = req
            const payload = req.body;
            console.log(getRequest.userId,"user get");
            const data = await chekcUserPermissions(payload,getRequest.userId)
            console.log(data,"data");
            
            // const data:any = await checkPermission('users', getRequest.userId)
        
            
            return res.status(200).json({status:200,data})
        } catch (error) {
            return res.status(500).json({status: 500, error: error.message})
        }
    }

    async getAllPermissions(req: Request, res: Response){
        try {
            const getRequest:any = req;
            console.log(getRequest.userId);
            
            const data:any = await allPermissionsService(getRequest.userId);
            return res.status(200).json({
                status:200,data
            });
        } catch (error) {
            return res.status(500).json({status:500, error: error.message})
        }
    }
   
    async checkUsersPermissions(req: Request, res: Response){
        try {
            const userId:string = req.params.userId;
            const data = await checkUsersPermissionsService(userId);
            return res.json({data})
            
        } catch (error) {
            console.log(error);
            
            return res.status(500).json({
                
                status:500,
                message:error.message
            })
        }
    }
}