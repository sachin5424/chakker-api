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
exports.DeviceSetupListAggregate = exports.upDateDrivceSetup = exports.DeviceSetupListService = exports.createDeviceSetup = void 0;
const index_1 = require("../models/index");
let createDeviceSetup = (value) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield index_1.deviceSetupModel.create(value).catch((err) => {
                reject(err);
            });
            resolve(data);
        }
        catch (error) {
            reject(error);
        }
    }));
};
exports.createDeviceSetup = createDeviceSetup;
let DeviceSetupListService = () => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield index_1.deviceSetupModel.find();
            resolve(data);
        }
        catch (error) {
            reject(error);
        }
    }));
};
exports.DeviceSetupListService = DeviceSetupListService;
let DeviceSetupListAggregate = () => {
    return new Promise((resolve, reject) => {
        index_1.deviceSetupModel.aggregate([
            {
                $lookup: {
                    from: "zone_setups",
                    foreignField: "_id",
                    localField: "zoneId",
                    as: "Zone"
                }
            },
            { $unwind: "$Zone" },
            {
                $lookup: {
                    from: "sub_zones",
                    foreignField: "_id",
                    localField: "subZoneId",
                    as: "sub_zones"
                }
            },
            { $unwind: "$sub_zones" },
            {
                $addFields: {
                    "addBy": "Sachin sagar",
                    "zoneSetupName": "$Zone.zoneName",
                    "subZoneName": "$sub_zones.zoneName",
                }
            },
            {
                $project: {
                    "Zone": 0,
                    "sub_zones": 0,
                    "location": 0
                }
            }
        ]).exec((err, invites) => {
            if (err) {
                reject(err);
            }
            resolve(invites);
        });
    });
};
exports.DeviceSetupListAggregate = DeviceSetupListAggregate;
let upDateDrivceSetup = (id, value) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield index_1.deviceSetupModel.findOneAndUpdate({ _id: id }, value);
            resolve(data);
        }
        catch (error) {
            reject(error);
        }
    }));
};
exports.upDateDrivceSetup = upDateDrivceSetup;
//# sourceMappingURL=device-setup.service.js.map