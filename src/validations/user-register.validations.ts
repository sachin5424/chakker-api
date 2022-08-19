import { check } from 'express-validator';
import { adminLoginService, emailcheckService,userFindOne } from '../services/auth.service'
const message = {
    required: "This field is required",
    minLength: "This field minimum length 3 characters",
    requiredEmail:"please enter a valid email address",

}

const userRegisterValidate: any[] = [
    check('username').notEmpty()
        .withMessage(message.required)
        .isLength({ min: 3 }).withMessage(message.minLength),
    check('password').notEmpty().withMessage(message.required)
        .isLength({ min: 3 }).withMessage("Password must be at least 6 characters"),
    check('lastName').optional().notEmpty().withMessage(message.minLength),
    check('firstName').optional().notEmpty().withMessage(message.minLength),
    check("email").notEmpty().withMessage(message.required).isEmail()
        .withMessage("please enter a valid email address").custom(async (value, { req }) => {
            return emailcheckService(value, 'user').then((data: any) => {
                console.log({data})
                if(!data){
                    return false;
                }
                if (data.isEmailverified == false) {
                    throw new Error("Email address not verified !")
                }
                else if (data) {
                    throw new Error("This email address is already registered")
                }
            })
        }),
    check('gender').notEmpty().withMessage(message.required).isIn(['male', 'female'])
        .withMessage("please enter a valid gender ")
    ,
    check("companyName").notEmpty().withMessage(message.required)
        .isLength({ min: 3 }).withMessage(message.minLength),
    check("application").notEmpty().withMessage(message.required)
        .isLength({ min: 3 }).withMessage(message.minLength),
    check("status").notEmpty().withMessage(message.required).isIn(['active', 'deactive'])
        .withMessage("please enter a valid status")
    ,
    check("mobile").optional().isNumeric().withMessage('please enter a valid mobile number')

];

const UserVerificationValidate:any[] = [
    check("email").notEmpty().withMessage(message.required).isEmail().withMessage(message.requiredEmail)
    .custom(async(value:any)=>{
        return userFindOne({email: value,userTpe:"user",isEmailverified:false}).then((data:any)=>{
            if(!data){
                throw new Error("please valid email address")
            }
        })
        // return emailcheckService(value, 'user').then((data: any) => {
        //     if (data.isEmailverified !== false) {
        //         throw new Error("Email address not verified !")
        //     }
        // })
    }),
    check("otp").notEmpty().isNumeric()
]

export {
    userRegisterValidate,
    UserVerificationValidate
}