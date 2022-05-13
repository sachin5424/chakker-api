import { Request, Response } from 'express';
import { userProfileInterface,userInterface ,userVerificationInterface} from '../interface/user-register.interface';
import {userRegister} from '../services/auth.service';
import {userProfileService,adminUserListService,userFindOne,userUpdateOne} from '../services/user.service';
import {generateOtp} from '../utls/_helper';
import mongoose from 'mongoose'
export default class UserController {
  constructor() { 
  
  }

 

  async userRegister(req: Request, res: Response){
    try {
        const payload = req.body;
        const otp:any = generateOtp("0978");

        const data:any  = await userRegister({
          username: payload.username,
          password: payload.password,
          email: payload.email,
          emailOtp:otp
        });
        let options:userProfileInterface = {
          userId:data._id,
          gender: payload.gender,
          companyName:payload.companyName,
          application:payload.application,
          mobileNumber: payload.mobile,
          status: payload.status
        };
        const createProfile = await userProfileService(options)
       return res.status(200).json({
          status:200,
          message:"user created successfully !",
          data: createProfile
        });
       
    } catch (error) {
      return res.status(500).json({ error: error.message,status: 500});
    }
  }


  async userEmailVerification(req: Request, res: Response){
    try {
      const payload:userVerificationInterface = req.body;
      let options:userVerificationInterface = {
        email: payload.email,
        otp:payload.otp
      }
      return res.status(200).json({status:200,data:options});

    } catch (error) {
      return res.status(500).json({ error: error.message,status: 500})
    }
  }


  async userList(req: Request, res: Response){
    try {
      console.log("uuu");
      const filter:any[] =[
        {
            $match:{
                isActive:1,
                // isEmailverified:true,
            }
        },
        {
          $lookup:{
              from:"user_profiles",
              localField:"_id",
              foreignField:"userId",
              as:"profile"
          }
      },
        {
          $unwind:"$profile"
        }
]
      const data = await adminUserListService(filter);
      return res.status(200).json({status:200,data:data})
    } catch (error) {
      return res.status(500).json({error: error.message,status:500})
    }
  }


  async userDetails(req: Request, res: Response){
    try {
       const _id = req.params.id
      const filter:any[] =[
        {
            $match:{
                _id: new mongoose.Types.ObjectId(_id),
            }
        },
        {
          $lookup:{
              from:"user_profiles",
              localField:"_id",
              foreignField:"userId",
              as:"profile"
          }
      },
        {
          $unwind:"$profile"
        }
]
      const data = await adminUserListService(filter);
      return res.status(200).json({status:200,data:data})
    } catch (error) {
      return res.status(500).json({error: error.message,status:500})
    }
  }
  
  async userUpdate(req:Request, res:Response){
    try {
      const _id:string = req.params.id;
      const payload:any = req.body;
      console.log(payload);
      
      const data:any = await userUpdateOne(_id,payload);
      return res.status(200).json({status:200,data})
    } catch (error) {
      return res.status(500).json({ error: error.message,status: 500})
    }
  }
  
}