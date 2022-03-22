import {check,param} from 'express-validator';
import {checkUniqueZoneNameValidation,findOneZone,checkByIdUniqueZoneNameValidation} from './sub-zone.service'
const ValidationMessage ={
    requiredField: "This Field is required",
    inValidField: "This Field is invalid",
    emailField: "invalid email address",
    passwordField: "password",
    PasswordLength:"Password must be between 4 to 16 characters",
    confirmPassword:"Passwords must be same"
}

const addZoneSetupValidation:any[] = [
    check("zoneName").notEmpty().withMessage(ValidationMessage.requiredField).isString()
    .withMessage(ValidationMessage.inValidField)
    .custom(async(value)=>{
        return checkUniqueZoneNameValidation(value).then((data)=>{
            if(data){
                throw new Error("try unique Zone Name!")
            }
        })
    }),
    check("latitude").optional().notEmpty().withMessage(ValidationMessage),
    check("longitude").optional().notEmpty().withMessage(ValidationMessage),
    check("status").optional().notEmpty().withMessage(ValidationMessage).isBoolean()
];

const deleteZoneSetupsParamValidation:any[] = [
  param("id").notEmpty().withMessage(ValidationMessage.requiredField).custom((value:any,{req}) =>{
      return findOneZone(value).then((data)=>{
          if(!data){
              throw new Error("invalid params id")
          }
      })
  })
];


const updateZoneSetupValidation:any[] = [
    check("zoneName").optional().notEmpty().withMessage(ValidationMessage.requiredField).isString()
    .withMessage(ValidationMessage.inValidField)
    .custom(async(value:any,{req}) =>{
        return checkByIdUniqueZoneNameValidation(req.params.id,value).then((data)=>{
            if(data){
                throw new Error("try unique Zone Name!")
            }
        })
    }),
    check("latitude").optional().notEmpty().withMessage(ValidationMessage),
    check("longitude").optional().notEmpty().withMessage(ValidationMessage),
    check("status").optional().notEmpty().withMessage(ValidationMessage).isBoolean()
]


export {
    addZoneSetupValidation,
    deleteZoneSetupsParamValidation,
    updateZoneSetupValidation
}