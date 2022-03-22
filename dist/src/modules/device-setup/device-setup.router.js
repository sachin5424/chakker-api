"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceSetUpRoutes = void 0;
const device_setup_controller_1 = __importDefault(require("./device-setup.controller"));
const _Validations_1 = require("./_Validations");
const checkValidResponse_1 = require("../middleware/checkValidResponse");
const express_1 = require("express");
const deviceSetUpController = new device_setup_controller_1.default;
const router = (0, express_1.Router)();
const Routers = [
    router.post("/admin/add/device-setup", _Validations_1.deviceSetpValidation, checkValidResponse_1.checkValidResponse, deviceSetUpController.addDeviceZoneSetup),
    router.get("/admin/list/device-setup", deviceSetUpController.ListDeviceZoneSetup),
    router.put("/admin/update/device-setup/:id", _Validations_1.upDateDeviceSetpValidation, checkValidResponse_1.checkValidResponse, deviceSetUpController.UpdateDeviceZoneSetup),
    router.get("/admin/power/device-setup/:id", _Validations_1.powerDeviceSetpValidation, checkValidResponse_1.checkValidResponse, deviceSetUpController.DeviceZonePowerOff),
    router.get("/admin/device-setup/details/:id", deviceSetUpController.DeviceZoneDetails)
];
const DeviceSetUpRoutes = Routers;
exports.DeviceSetUpRoutes = DeviceSetUpRoutes;
//# sourceMappingURL=device-setup.router.js.map