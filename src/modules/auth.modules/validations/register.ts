import {check} from 'express-validator';
import {adminLoginService,emailcheckService} from '../service/auth.service'
const ValidationMessage ={
    requiredField: "This Field is required",
    inValidField: "This Field is invalid",
    emailField: "invalid email address",
    passwordField: "password",
    PasswordLength:"Password must be between 4 to 16 characters",
    confirmPassword:"Passwords must be same"
}


const RegisterValidator:any[] =[
    check("username").notEmpty().withMessage(ValidationMessage.requiredField).isString(),
    check("password").notEmpty().withMessage(ValidationMessage.passwordField)
    .isString(),
    check("email").notEmpty().withMessage(ValidationMessage.emailField).isEmail(),
    check("lastName").optional().notEmpty().withMessage(ValidationMessage.requiredField),
    check("firstName").optional().notEmpty().withMessage(ValidationMessage.requiredField),
    check("confirmPassword").notEmpty().withMessage(ValidationMessage.requiredField)
];


const adminLoginValidation:any [] =[
    check("email").notEmpty().withMessage(ValidationMessage.emailField).isEmail()
    .custom(async(value,{req})=>{
        return emailcheckService(value,'admin').then((data)=>{
            if(!data){
              throw new Error("invalid admin email")
            }
        })
    }),
    check("password").notEmpty().withMessage(ValidationMessage.passwordField)
    .custom((value,{req})=>{
        let data ={
            email:req.body.email,
            password:req.body.password
        }
        return adminLoginService(data).then((data:any)=>{
            if(!data){
                throw new Error("invalid password")
            }
        })
    })
]

export {
    RegisterValidator,
    adminLoginValidation
}