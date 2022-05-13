import { userModel, userProfileModel } from '../models/index';
import { userProfileInterface } from '../interface/user-register.interface';
import {aggregate} from './shared.service'
// import second from './'


const userProfileService = (value: userProfileInterface) => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = new userProfileModel(value);
            const newData = await data.save();
            resolve(newData);
        } catch (error) {
            reject(error)
        }
    })
}

const adminUserListService = (filter:any[]) => {
    return new Promise(async (resolve, reject) => {
        try {
         
            const data:any = await aggregate(userModel,filter)
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}


const userFindOne = (filter:any[]) => {
    return new Promise(async (resolve, reject) => {
        try {
         
            const data:any = await aggregate(userModel,filter)
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}


const userUpdateOne = (id:string,value:Object) => {
    return new Promise(async (resolve, reject) => {
        try {
            const data:any=await userModel.updateOne({_id:id},value);
            const profileUpdate:any = await userProfileModel.updateOne({userId:id},value);
            resolve({data,profileUpdate})
        } catch (error) {
            reject(error)
        }
    })
}

export {
    userProfileService,adminUserListService,userFindOne,userUpdateOne
}