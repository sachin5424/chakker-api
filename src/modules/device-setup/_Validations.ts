


import {check,param,query} from 'express-validator';
import {zoneSetupFindById,subZoneFindById} from '../shared/shared.service'
import {DeviceFindById} from './device-setup-dashboard.service'


const ValidationMessage ={
    requiredField: "This Field is required",
    inValidField: "This Field is invalid",
    emailField: "invalid email address",
    stringLength:"Value must be between 3 characters",
    passwordField: "password",
    PasswordLength:"Password must be between 4 to 16 characters",
    confirmPassword:"Passwords must be same"
}

const deviceSetpValidation:any[] =[
    check('zoneId').notEmpty().withMessage(ValidationMessage.requiredField).custom(async(value:string)=>{
        return zoneSetupFindById(value).then((data:any)=>{
            if(!data){
                throw new Error("inValid zone id !")
            }
        }).catch((err:any)=>{
            throw new Error("invalid zone id !")
        })
    }),
    check('subZoneId').notEmpty().withMessage(ValidationMessage.requiredField).custom(async(value:string)=>{
        return subZoneFindById(value).then((data:any)=>{
            if(!data){
                throw new Error("inValid zone id !")
            }
        }).catch((err:any)=>{
            throw new Error("invalid zone id !")
        })
    }),
    check("imeiNumber").notEmpty().withMessage(ValidationMessage.requiredField).isNumeric().isLength({ min: 16, max: 16 }),
    check("operatorNumber").notEmpty().withMessage(ValidationMessage.requiredField).isNumeric().isLength({ min: 3 }),
    check("simNumber").notEmpty().withMessage(ValidationMessage.requiredField).isString().isLength({ min: 3}).withMessage(ValidationMessage.stringLength),
    check("PumpHp").notEmpty().withMessage(ValidationMessage.requiredField).isString().isLength({ min: 3}).withMessage(ValidationMessage.stringLength),
    check("operatorName").notEmpty().withMessage(ValidationMessage.requiredField).isString().isLength({ min: 3}).withMessage(ValidationMessage.stringLength),
    check("installationDate").notEmpty().withMessage(ValidationMessage.requiredField).isDate(),
    check("serviceOverDate").notEmpty().withMessage(ValidationMessage.requiredField).isDate(),
    check("smsNumber").optional().notEmpty().withMessage(ValidationMessage.requiredField).isString().withMessage(ValidationMessage.inValidField).isLength({ min: 3}).withMessage(ValidationMessage.stringLength),
    check("smsStatus").optional().notEmpty().withMessage(ValidationMessage.requiredField).isString().isIn(['active','inactive']),
    check("deviceType").notEmpty().withMessage(ValidationMessage.requiredField).isString().isIn(['3G','4G','5G']).withMessage("accpt value 3G,4G,5G"),
    check("applicationType").notEmpty().withMessage(ValidationMessage.requiredField).isString(),
    check("place").notEmpty().withMessage(ValidationMessage.requiredField).isString().isLength({min: 3}).withMessage(ValidationMessage.stringLength),
    check("latitude").optional().isFloat().withMessage(ValidationMessage.requiredField), 
    check("longitude").optional().isFloat().withMessage(ValidationMessage.requiredField),
    check("Image").optional().isString().matches(/^data:([A-Za-z-+\/]+);base64,(.+)$/)

];


const upDateDeviceSetpValidation:any[] =[
    check('zoneId').optional().notEmpty().withMessage(ValidationMessage.requiredField).custom(async(value:string)=>{
        return zoneSetupFindById(value).then((data:any)=>{
            if(!data){
                throw new Error("inValid zone id !")
            }
        }).catch((err:any)=>{
            throw new Error("invalid zone id !")
        })
    }),
    check('subZoneId').optional().notEmpty().withMessage(ValidationMessage.requiredField).custom(async(value:string)=>{
        return subZoneFindById(value).then((data:any)=>{
            if(!data){
                throw new Error("inValid zone id !")
            }
        }).catch((err:any)=>{
            throw new Error("invalid zone id !")
        })
    }),
    check("imeiNumber").optional().notEmpty().withMessage(ValidationMessage.requiredField).isNumeric().isLength({ min: 16, max: 16 }),
    check("operatorNumber").optional().notEmpty().withMessage(ValidationMessage.requiredField).isNumeric().isLength({ min: 3 }),
    check("simNumber").optional().notEmpty().withMessage(ValidationMessage.requiredField).isString().isLength({ min: 3}).withMessage(ValidationMessage.stringLength),
    check("PumpHp").optional().notEmpty().withMessage(ValidationMessage.requiredField).isString().isLength({ min: 3}).withMessage(ValidationMessage.stringLength),
    check("operatorName").optional().notEmpty().withMessage(ValidationMessage.requiredField).isString().isLength({ min: 3}).withMessage(ValidationMessage.stringLength),
    check("installationDate").optional().notEmpty().withMessage(ValidationMessage.requiredField).isDate(),
    check("serviceOverDate").optional().notEmpty().withMessage(ValidationMessage.requiredField).isDate(),
    check("smsNumber").optional().notEmpty().withMessage(ValidationMessage.requiredField).isString().withMessage(ValidationMessage.inValidField).isLength({ min: 3}).withMessage(ValidationMessage.stringLength),
    check("smsStatus").optional().notEmpty().withMessage(ValidationMessage.requiredField).isString().isIn(['active','inactive']),
    check("deviceType").notEmpty().withMessage(ValidationMessage.requiredField).isString().isIn(['3G','4G','5G']).withMessage("accpt value 3G,4G,5G"),
    check("applicationType").optional().notEmpty().withMessage(ValidationMessage.requiredField).isString(),
    check("place").optional().notEmpty().withMessage(ValidationMessage.requiredField).isString().isLength({min: 3}).withMessage(ValidationMessage.stringLength),
    check("latitude").optional().isFloat().withMessage(ValidationMessage.requiredField), 
    check("longitude").optional().isFloat().withMessage(ValidationMessage.requiredField)

];


const powerDeviceSetpValidation:any[] =[
    param("id").notEmpty().withMessage(ValidationMessage.requiredField).custom(async(value) => {
        return DeviceFindById(value).then((data)=>{
            if(!data){ 
                throw new Error("invalid device setp id !")
            }
        })
    }),
    query("power").notEmpty().withMessage("query required Field !").isBoolean(),

]

export {
    deviceSetpValidation,
    upDateDeviceSetpValidation,
    powerDeviceSetpValidation
}

