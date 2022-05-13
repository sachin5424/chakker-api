// var jwt = require('jsonwebtoken');
import jwt from 'jsonwebtoken'
var JWT_SECREATE_kEY = 'test';
import mongoose from 'mongoose'

import userModel from '../models/models/user'
// const mongoose = require('mongoose');
const ADMINJWTVERIFY = async (req:any,res:any,next:any) => {
    try {
        // console.log(req.headers.authorization);
        var bearer = req.headers.authorization.split(" ");

       const token = bearer[1];
        var decode = jwt.verify(token, JWT_SECREATE_kEY);
        const user:any = await userModel.findOne({_id:decode._id, userTpe: 'admin'});
        if(user){
            req.userId = decode._id;
            next()
        }
        else{
            return res.status(401).json({message:"Failed to authenticate token"})
        }
            
            // if(user){
            //     next()
            // }
            //              return  res.status(401).json({
            //             status: 401,
            //             message: "Failed to authenticate token."
            //         })
         
    } catch (error) {
        res.status(401).json({
            status: 401,
            message: "Failed to authenticate token."
        })
    }
}
export {
    ADMINJWTVERIFY
}
// module.exports = async (req, res, next) => {
  
// }