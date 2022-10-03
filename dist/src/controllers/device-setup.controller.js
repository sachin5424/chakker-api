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
const device_setup_service_1 = require("../services/device-setup.service");
const _hepler_1 = require("../shared/_hepler");
const device_setup_dashboard_service_1 = require("../services/device-setup-dashboard.service");
const base64string_to_image_1 = require("base64string-to-image");
class DeviceSetUpController {
    constructor() {
    }
    ;
    addDeviceZoneSetup(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = req.body;
                const ImageName = Date.now().toString();
                const deviceId = (0, _hepler_1.generateRandomString)("sachin", 6);
                let options = {
                    zoneId: payload.zoneId,
                    deviceId: deviceId,
                    subZoneId: payload.subZoneId,
                    simNumber: payload.simNumber,
                    applicationType: payload.applicationType,
                    PumpHp: payload.PumpHp,
                    operatorName: payload.operatorName,
                    smsNumber: payload.smsNumber,
                    smsStatus: payload.smsStatus,
                    installationDate: payload.installationDate,
                    serviceOverDate: payload.serviceOverDate,
                    deviceType: payload.deviceType,
                    location: payload.location,
                    imeiNumber: payload.imeiNumber,
                    operatorNumber: payload.operatorNumber,
                    place: payload.place,
                };
                if (payload.Image) {
                    var image_path = yield (0, base64string_to_image_1.base64StringToImage)(payload.Image, "upload/", ImageName);
                    options['Image'] = image_path;
                }
                if (req.body.latitude) {
                    var loaction = {
                        coordinates: [req.body.latitude, req.body.longitude]
                    };
                    options['location'] = loaction;
                }
                const data = yield (0, device_setup_service_1.createDeviceSetup)(options);
                return res.status(200).json({ status: 200, message: "success device setup data create !", data });
            }
            catch (error) {
                return res.status(500).send({ status: 500, error: error.message });
            }
        });
    }
    ListDeviceZoneSetup(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield (0, device_setup_service_1.DeviceSetupListAggregate)();
                return res.status(200).json({ status: 200, data });
            }
            catch (error) {
                return res.status(500).json({ status: 500, error: error.message });
            }
        });
    }
    UpdateDeviceZoneSetup(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const _id = req.params.id;
                const payload = req.body;
                console.log({ reql: req.body });
                const data = yield (0, device_setup_service_1.upDateDrivceSetup)(_id, payload);
                return res.status(200).json({ status: 200, message: "", data });
            }
            catch (error) {
                return res.status(500).json({ status: 500, error: error.message });
            }
        });
    }
    new_UpdateDeviceZoneSetup(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const _id = req.params.id;
                const payload = req.body;
                console.log({ reql: req.body });
                const data = yield (0, device_setup_service_1.drivceSetupUpdate)(_id, payload);
                return res.status(200).json({ status: 200, message: "", data });
            }
            catch (error) {
                return res.status(500).json({ status: 500, error: error.message });
            }
        });
    }
    DeviceZonePowerOff(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const _id = req.params.id;
                const check_power = req.query.power;
                const power = check_power == 'true' ? true : false;
                var startTime;
                var endTime;
                if (power == true) {
                    startTime = Date.now();
                }
                yield (0, device_setup_dashboard_service_1.PowerOfService)(_id, power, startTime);
                return res.status(200).json({ status: 200, message: `successfully power ${power}` });
                //    await
            }
            catch (error) {
                return res.status(500).json({ status: 500, error: error.message });
            }
        });
    }
    DeviceZoneDetails(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const _id = req.params.id;
                const data = yield (0, device_setup_dashboard_service_1.DeviceFindByIdAndFilter)(_id);
                console.log({ data });
                return res.status(200).json({ status: 200, data });
            }
            catch (error) {
                return res.status(500).json({ status: 500, error: error.message });
            }
        });
    }
    drviceMaintenance(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = req.body;
                const data = yield (0, device_setup_service_1.DrviceMaintenance)(payload);
                console.log({ data });
                return res.status(200).json({ status: 200, data });
            }
            catch (error) {
                return res.status(500).json({ status: 500, error: error.message });
            }
        });
    }
}
exports.default = DeviceSetUpController;
//# sourceMappingURL=device-setup.controller.js.map