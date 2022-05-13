import {check} from 'express-validator';
import userModel from '../models/models/user';
import userModelPermissionModel from '../models/models/user-permission';
// import permissionModel from '../models/models/permissions';

const validationMessages:any = {
    required:"This field is required"
}

const createUserPermissionValidation:any[] = [
    check('userId').notEmpty().withMessage(validationMessages.required).custom(async(value:any)=>{
     return userModel.findOne({_id: value}).then((data:any)=>{
         if(!data) throw new Error("Invalid userId");
     })
    }),
    check('permissions').notEmpty().withMessage(validationMessages.required).isArray().withMessage("Invalid Array value")
];

export {createUserPermissionValidation}