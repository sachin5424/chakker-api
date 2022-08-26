"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserVerificationValidate = exports.userRegisterValidate = void 0;
const express_validator_1 = require("express-validator");
const auth_service_1 = require("../services/auth.service");
const message = {
    required: "This field is required",
    minLength: "This field minimum length 3 characters",
    requiredEmail: "please enter a valid email address",
};
const userRegisterValidate = [
    (0, express_validator_1.check)('username').notEmpty()
        .withMessage(message.required)
        .isLength({ min: 3 }).withMessage(message.minLength),
    (0, express_validator_1.check)('password').notEmpty().withMessage(message.required)
        .isLength({ min: 3 }).withMessage("Password must be at least 6 characters"),
    (0, express_validator_1.check)('lastName').optional().notEmpty().withMessage(message.minLength),
    (0, express_validator_1.check)('firstName').optional().notEmpty().withMessage(message.minLength),
    (0, express_validator_1.check)("email").notEmpty().withMessage(message.required).isEmail()
        .withMessage("please enter a valid email address").custom((value, { req }) => __awaiter(void 0, void 0, void 0, function* () {
        return (0, auth_service_1.emailcheckService)(value, 'user').then((data) => {
            console.log({ data });
            if (!data) {
                return false;
            }
            if (data.isEmailverified == false) {
                throw new Error("Email address not verified !");
            }
            else if (data) {
                throw new Error("This email address is already registered");
            }
        });
    })),
    (0, express_validator_1.check)('gender').notEmpty().withMessage(message.required).isIn(['male', 'female'])
        .withMessage("please enter a valid gender "),
    (0, express_validator_1.check)("companyName").notEmpty().withMessage(message.required)
        .isLength({ min: 3 }).withMessage(message.minLength),
    (0, express_validator_1.check)("application").notEmpty().withMessage(message.required)
        .isLength({ min: 3 }).withMessage(message.minLength),
    (0, express_validator_1.check)("status").notEmpty().withMessage(message.required).isIn(['active', 'deactive'])
        .withMessage("please enter a valid status"),
    (0, express_validator_1.check)("mobile").optional().isNumeric().withMessage('please enter a valid mobile number')
];
exports.userRegisterValidate = userRegisterValidate;
const UserVerificationValidate = [
    (0, express_validator_1.check)("email").notEmpty().withMessage(message.required).isEmail().withMessage(message.requiredEmail)
        .custom((value) => __awaiter(void 0, void 0, void 0, function* () {
        return (0, auth_service_1.userFindOne)({ email: value, userTpe: "user", isEmailverified: false }).then((data) => {
            if (!data) {
                throw new Error("please valid email address");
            }
        });
        // return emailcheckService(value, 'user').then((data: any) => {
        //     if (data.isEmailverified !== false) {
        //         throw new Error("Email address not verified !")
        //     }
        // })
    })),
    (0, express_validator_1.check)("otp").notEmpty().isNumeric()
];
exports.UserVerificationValidate = UserVerificationValidate;
//# sourceMappingURL=user-register.validations.js.map