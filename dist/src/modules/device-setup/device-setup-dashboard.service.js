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
exports.DeviceFindByIdAndFilter = exports.DeviceFindById = exports.PowerOfService = void 0;
const index_1 = require("../../db/index");
const mongoose_1 = __importDefault(require("mongoose"));
let aggregate = (model, filter) => {
    return new Promise((resolve, reject) => {
        model.aggregate(filter).exec(function (err, invites) {
            if (err) {
                reject(err);
            }
            resolve(invites);
        });
    });
};
const PowerOfService = (_id, _value) => {
    console.log(_value);
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield index_1.deviceSetupModel.findOneAndUpdate({ _id }, { power: _value, lastStringDateStamp: Date.now() });
            resolve(data);
        }
        catch (error) {
            reject(error);
        }
    }));
};
exports.PowerOfService = PowerOfService;
const DeviceFindById = (_id) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield index_1.deviceSetupModel.findOne({ _id });
            resolve(data);
        }
        catch (error) {
            reject(error);
        }
    }));
};
exports.DeviceFindById = DeviceFindById;
const DeviceFindByIdAndFilter = (_id) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield aggregate(index_1.deviceSetupModel, [
                {
                    $match: {
                        _id: new mongoose_1.default.Types.ObjectId(_id)
                    }
                },
                {
                    $lookup: {
                        from: 'zone_setups',
                        localField: 'zoneId',
                        foreignField: '_id',
                        as: 'zoneId'
                    },
                },
                { $unwind: "$zoneId" },
                {
                    $lookup: {
                        from: 'sub_zones',
                        localField: 'subZoneId',
                        foreignField: '_id',
                        as: 'subZoneId'
                    },
                },
                { $unwind: "$subZoneId" },
            ]);
            resolve(data);
        }
        catch (error) {
            reject(error);
        }
    }));
};
exports.DeviceFindByIdAndFilter = DeviceFindByIdAndFilter;
//# sourceMappingURL=device-setup-dashboard.service.js.map