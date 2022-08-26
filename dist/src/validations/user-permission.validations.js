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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserPermissionValidation = void 0;
const express_validator_1 = require("express-validator");
const user_1 = __importDefault(require("../models/models/user"));
// import permissionModel from '../models/models/permissions';
const validationMessages = {
    required: "This field is required"
};
const createUserPermissionValidation = [
    (0, express_validator_1.check)('userId').notEmpty().withMessage(validationMessages.required).custom((value) => __awaiter(void 0, void 0, void 0, function* () {
        return user_1.default.findOne({ _id: value }).then((data) => {
            if (!data)
                throw new Error("Invalid userId");
        });
    })),
    (0, express_validator_1.check)('permissions').notEmpty().withMessage(validationMessages.required).isArray().withMessage("Invalid Array value")
];
exports.createUserPermissionValidation = createUserPermissionValidation;
//# sourceMappingURL=user-permission.validations.js.map