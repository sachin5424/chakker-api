import { userModel } from '../../../db/index';
import { ResgisterUserInterFace,AdminLogininterFace,JwtTokenInterFace } from '../interface/auth.interface'
import jwt from 'jsonwebtoken'

let userRegister =(userData:ResgisterUserInterFace) =>{
    return new Promise(async (resolve, reject) => {
        try {
          const data:any = await userModel.create(userData).catch((err:any)=>{
              reject(err);
          });
          resolve(data)
        } catch (error:any) {
            reject(error);
        }
    });
}

let adminLoginService = (data:AdminLogininterFace) =>{
    return new Promise(async(resolve, reject) =>{
        try {
            const fatchData = await userModel.findOne({email:data.email,password:data.password,userTpe:'admin',isEmailverified:true}).catch((error:any)=>{
                reject(error);
            });
            resolve(fatchData);
        } catch (error) {
            reject(error);
        }
    })
}

let emailcheckService = (data:string,type:string) =>{
    return new Promise(async(resolve, reject) =>{
        try {
            const fatchData = await userModel.findOne({email:data,userTpe:type}).catch((error:any)=>{
                reject(error);
            });
            resolve(fatchData);
        } catch (error) {
            reject(error);
        }
    })
}

let findDataByEmail =async (email:string) => {
    const  data  = await userModel.findOne({email:email});
    return data

}



let genrateJwttoken = (data:JwtTokenInterFace ) =>{
    return new Promise(async(resolve, reject) =>{
        try {
            const payload:JwtTokenInterFace = {
             _id:data._id,
             email:data.email,
             username:data.username,
            }
            const token = jwt.sign(payload,'test',{ expiresIn: 260 * 260 });
            resolve(token);
        } catch (error) {
            reject(error);
        }
    })
}



export {
    userRegister,
    adminLoginService,
    emailcheckService,
    genrateJwttoken,
    findDataByEmail
}