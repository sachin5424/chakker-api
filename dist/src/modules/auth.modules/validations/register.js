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
exports.adminLoginValidation = exports.RegisterValidator = void 0;
const express_validator_1 = require("express-validator");
const auth_service_1 = require("../service/auth.service");
const ValidationMessage = {
    requiredField: "This Field is required",
    inValidField: "This Field is invalid",
    emailField: "invalid email address",
    passwordField: "password",
    PasswordLength: "Password must be between 4 to 16 characters",
    confirmPassword: "Passwords must be same"
};
const RegisterValidator = [
    (0, express_validator_1.check)("username").notEmpty().withMessage(ValidationMessage.requiredField).isString(),
    (0, express_validator_1.check)("password").notEmpty().withMessage(ValidationMessage.passwordField)
        .isString(),
    (0, express_validator_1.check)("email").notEmpty().withMessage(ValidationMessage.emailField).isEmail(),
    (0, express_validator_1.check)("lastName").optional().notEmpty().withMessage(ValidationMessage.requiredField),
    (0, express_validator_1.check)("firstName").optional().notEmpty().withMessage(ValidationMessage.requiredField),
    (0, express_validator_1.check)("confirmPassword").notEmpty().withMessage(ValidationMessage.requiredField)
];
exports.RegisterValidator = RegisterValidator;
const adminLoginValidation = [
    (0, express_validator_1.check)("email").notEmpty().withMessage(ValidationMessage.emailField).isEmail()
        .custom((value, { req }) => __awaiter(void 0, void 0, void 0, function* () {
        return (0, auth_service_1.emailcheckService)(value, 'admin').then((data) => {
            if (!data) {
                throw new Error("invalid admin email");
            }
        });
    })),
    (0, express_validator_1.check)("password").notEmpty().withMessage(ValidationMessage.passwordField)
        .custom((value, { req }) => {
        let data = {
            email: req.body.email,
            password: req.body.password
        };
        return (0, auth_service_1.adminLoginService)(data).then((data) => {
            if (!data) {
                throw new Error("invalid password");
            }
        });
    })
];
exports.adminLoginValidation = adminLoginValidation;
//# sourceMappingURL=register.js.map