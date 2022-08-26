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
exports.updateZoneSetupValidation = exports.deleteZoneSetupsParamValidation = exports.addZoneSetupValidation = void 0;
const express_validator_1 = require("express-validator");
const sub_zone_service_1 = require("../services/sub-zone.service");
const ValidationMessage = {
    requiredField: "This Field is required",
    inValidField: "This Field is invalid",
    emailField: "invalid email address",
    passwordField: "password",
    PasswordLength: "Password must be between 4 to 16 characters",
    confirmPassword: "Passwords must be same"
};
const addZoneSetupValidation = [
    (0, express_validator_1.check)("zoneName").notEmpty().withMessage(ValidationMessage.requiredField).isString()
        .withMessage(ValidationMessage.inValidField)
        .custom((value) => __awaiter(void 0, void 0, void 0, function* () {
        return (0, sub_zone_service_1.checkUniqueZoneNameValidation)(value).then((data) => {
            if (data) {
                throw new Error("try unique Zone Name!");
            }
        });
    })),
    (0, express_validator_1.check)("latitude").optional().notEmpty().withMessage(ValidationMessage),
    (0, express_validator_1.check)("longitude").optional().notEmpty().withMessage(ValidationMessage),
    (0, express_validator_1.check)("status").optional().notEmpty().withMessage(ValidationMessage).isBoolean()
];
exports.addZoneSetupValidation = addZoneSetupValidation;
const deleteZoneSetupsParamValidation = [
    (0, express_validator_1.param)("id").notEmpty().withMessage(ValidationMessage.requiredField).custom((value, { req }) => {
        return (0, sub_zone_service_1.findOneZone)(value).then((data) => {
            if (!data) {
                throw new Error("invalid params id");
            }
        });
    })
];
exports.deleteZoneSetupsParamValidation = deleteZoneSetupsParamValidation;
const updateZoneSetupValidation = [
    (0, express_validator_1.check)("zoneName").optional().notEmpty().withMessage(ValidationMessage.requiredField).isString()
        .withMessage(ValidationMessage.inValidField)
        .custom((value, { req }) => __awaiter(void 0, void 0, void 0, function* () {
        return (0, sub_zone_service_1.checkByIdUniqueZoneNameValidation)(req.params.id, value).then((data) => {
            if (data) {
                throw new Error("try unique Zone Name!");
            }
        });
    })),
    (0, express_validator_1.check)("latitude").optional().notEmpty().withMessage(ValidationMessage),
    (0, express_validator_1.check)("longitude").optional().notEmpty().withMessage(ValidationMessage),
    (0, express_validator_1.check)("status").optional().notEmpty().withMessage(ValidationMessage).isBoolean()
];
exports.updateZoneSetupValidation = updateZoneSetupValidation;
//# sourceMappingURL=sub-zone-validations.js.map