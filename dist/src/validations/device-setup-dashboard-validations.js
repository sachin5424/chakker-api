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
exports.powerDeviceSetpValidation = exports.upDateDeviceSetpValidation = exports.deviceSetpValidation = void 0;
const express_validator_1 = require("express-validator");
const shared_service_1 = require("../shared/shared.service");
const device_setup_dashboard_service_1 = require("../services/device-setup-dashboard.service");
const ValidationMessage = {
    requiredField: "This Field is required",
    inValidField: "This Field is invalid",
    emailField: "invalid email address",
    stringLength: "Value must be between 3 characters",
    passwordField: "password",
    PasswordLength: "Password must be between 4 to 16 characters",
    confirmPassword: "Passwords must be same"
};
const deviceSetpValidation = [
    (0, express_validator_1.check)('zoneId').notEmpty().withMessage(ValidationMessage.requiredField).custom((value) => __awaiter(void 0, void 0, void 0, function* () {
        return (0, shared_service_1.zoneSetupFindById)(value).then((data) => {
            if (!data) {
                throw new Error("inValid zone id !");
            }
        }).catch((err) => {
            throw new Error("invalid zone id !");
        });
    })),
    (0, express_validator_1.check)('subZoneId').notEmpty().withMessage(ValidationMessage.requiredField).custom((value) => __awaiter(void 0, void 0, void 0, function* () {
        return (0, shared_service_1.subZoneFindById)(value).then((data) => {
            if (!data) {
                throw new Error("inValid zone id !");
            }
        }).catch((err) => {
            throw new Error("invalid zone id !");
        });
    })),
    // check("imeiNumber").notEmpty().withMessage(ValidationMessage.requiredField),
    // check("operatorNumber").notEmpty().withMessage(ValidationMessage.requiredField).isNumeric().isLength({ min: 3 }),
    // check("simNumber").notEmpty().withMessage(ValidationMessage.requiredField).isString().isLength({ min: 3}).withMessage(ValidationMessage.stringLength),
    // check("PumpHp").notEmpty().withMessage(ValidationMessage.requiredField).isString().isLength({ min: 3}).withMessage(ValidationMessage.stringLength),
    // check("operatorName").notEmpty().withMessage(ValidationMessage.requiredField).isString().isLength({ min: 3}).withMessage(ValidationMessage.stringLength),
    (0, express_validator_1.check)("installationDate").notEmpty().withMessage(ValidationMessage.requiredField).isDate(),
    (0, express_validator_1.check)("serviceOverDate").notEmpty().withMessage(ValidationMessage.requiredField).isDate(),
    (0, express_validator_1.check)("smsNumber").optional().notEmpty().withMessage(ValidationMessage.requiredField).isString().withMessage(ValidationMessage.inValidField).isLength({ min: 3 }).withMessage(ValidationMessage.stringLength),
    (0, express_validator_1.check)("smsStatus").optional().notEmpty().withMessage(ValidationMessage.requiredField).isString().isIn(['active', 'inactive']),
    (0, express_validator_1.check)("deviceType").notEmpty().withMessage(ValidationMessage.requiredField).isString().isIn(['3G', '4G', '5G']).withMessage("accpt value 3G,4G,5G"),
    (0, express_validator_1.check)("applicationType").notEmpty().withMessage(ValidationMessage.requiredField).isString(),
    // check("place").notEmpty().withMessage(ValidationMessage.requiredField).isString().isLength({min: 3}).withMessage(ValidationMessage.stringLength),
    (0, express_validator_1.check)("latitude").optional().isFloat().withMessage(ValidationMessage.requiredField),
    (0, express_validator_1.check)("longitude").optional().isFloat().withMessage(ValidationMessage.requiredField),
    (0, express_validator_1.check)("Image").optional().isString().matches(/^data:([A-Za-z-+\/]+);base64,(.+)$/)
];
exports.deviceSetpValidation = deviceSetpValidation;
const upDateDeviceSetpValidation = [
    (0, express_validator_1.check)('zoneId').optional().notEmpty().withMessage(ValidationMessage.requiredField).custom((value) => __awaiter(void 0, void 0, void 0, function* () {
        return (0, shared_service_1.zoneSetupFindById)(value).then((data) => {
            if (!data) {
                throw new Error("inValid zone id !");
            }
        }).catch((err) => {
            throw new Error("invalid zone id !");
        });
    })),
    (0, express_validator_1.check)('subZoneId').optional().notEmpty().withMessage(ValidationMessage.requiredField).custom((value) => __awaiter(void 0, void 0, void 0, function* () {
        return (0, shared_service_1.subZoneFindById)(value).then((data) => {
            if (!data) {
                throw new Error("inValid zone id !");
            }
        }).catch((err) => {
            throw new Error("invalid zone id !");
        });
    })),
    // check("imeiNumber").optional().notEmpty().withMessage(ValidationMessage.requiredField),
    // check("operatorNumber").optional().notEmpty().withMessage(ValidationMessage.requiredField).isNumeric().isLength({ min: 3 }),
    // check("simNumber").optional().notEmpty().withMessage(ValidationMessage.requiredField).isString().isLength({ min: 3}).withMessage(ValidationMessage.stringLength),
    // check("PumpHp").optional().notEmpty().withMessage(ValidationMessage.requiredField).isString().isLength({ min: 3}).withMessage(ValidationMessage.stringLength),
    // check("operatorName").optional().notEmpty().withMessage(ValidationMessage.requiredField).isString().isLength({ min: 3}).withMessage(ValidationMessage.stringLength),
    (0, express_validator_1.check)("installationDate").optional().notEmpty().withMessage(ValidationMessage.requiredField).isDate(),
    (0, express_validator_1.check)("serviceOverDate").optional().notEmpty().withMessage(ValidationMessage.requiredField).isDate(),
    // check("smsNumber").optional().notEmpty().withMessage(ValidationMessage.requiredField).isString().withMessage(ValidationMessage.inValidField).isLength({ min: 3}).withMessage(ValidationMessage.stringLength),
    (0, express_validator_1.check)("smsStatus").optional().notEmpty().withMessage(ValidationMessage.requiredField).isString().isIn(['active', 'inactive']),
    (0, express_validator_1.check)("deviceType").notEmpty().withMessage(ValidationMessage.requiredField).isString().isIn(['3G', '4G', '5G']).withMessage("accpt value 3G,4G,5G"),
    (0, express_validator_1.check)("applicationType").optional().notEmpty().withMessage(ValidationMessage.requiredField).isString(),
    // check("place").optional().notEmpty().withMessage(ValidationMessage.requiredField).isString().isLength({min: 3}).withMessage(ValidationMessage.stringLength),
    (0, express_validator_1.check)("latitude").optional().isFloat().withMessage(ValidationMessage.requiredField),
    (0, express_validator_1.check)("longitude").optional().isFloat().withMessage(ValidationMessage.requiredField)
];
exports.upDateDeviceSetpValidation = upDateDeviceSetpValidation;
const powerDeviceSetpValidation = [
    (0, express_validator_1.param)("id").notEmpty().withMessage(ValidationMessage.requiredField).custom((value) => __awaiter(void 0, void 0, void 0, function* () {
        return (0, device_setup_dashboard_service_1.DeviceFindById)(value).then((data) => {
            if (!data) {
                throw new Error("invalid device setp id !");
            }
        });
    })),
    (0, express_validator_1.query)("power").notEmpty().withMessage("query required Field !").isBoolean(),
];
exports.powerDeviceSetpValidation = powerDeviceSetpValidation;
//# sourceMappingURL=device-setup-dashboard-validations.js.map