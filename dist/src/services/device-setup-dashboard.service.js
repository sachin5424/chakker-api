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
const index_1 = require("../models/index");
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
const PowerOfService = (_id, _value, startTime) => {
    console.log(_value);
    var startTime_log;
    var endTime_log;
    var data;
    if (_value == false) {
        startTime_log = Date.now();
        endTime_log = Date.now();
    }
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            data = yield index_1.deviceSetupModel.findOneAndUpdate({ _id }, { power: _value, lastStringDateStamp: Date.now(), startTime: startTime });
            if (_value == false) {
                startTime_log = yield DeviceFindById(_id);
                console.log(startTime_log, "?????????");
                endTime_log = Date.now();
                function duration(t0, t1) {
                    var end = new Date(t0);
                    var d = new Date(t1);
                    d = d - end;
                    let weekdays = Math.floor(d / 1000 / 60 / 60 / 24 / 7);
                    let days = Math.floor(d / 1000 / 60 / 60 / 24 - weekdays * 7);
                    let hours = Math.floor(d / 1000 / 60 / 60 - weekdays * 7 * 24 - days * 24);
                    let minutes = Math.floor(d / 1000 / 60 - weekdays * 7 * 24 * 60 - days * 24 * 60 - hours * 60);
                    let seconds = Math.floor(d / 1000 - weekdays * 7 * 24 * 60 * 60 - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60);
                    let milliseconds = Math.floor(d - weekdays * 7 * 24 * 60 * 60 * 1000 - days * 24 * 60 * 60 * 1000 - hours * 60 * 60 * 1000 - minutes * 60 * 1000 - seconds * 1000);
                    let t = {};
                    ['weekdays', 'days', 'hours', 'minutes', 'seconds', 'milliseconds'].forEach(q => { if (eval(q) > 0) {
                        t[q] = eval(q);
                    } });
                    return t;
                }
                var log = duration(new Date(parseInt(startTime_log.startTime)), endTime_log);
                log['startTime'] = parseInt(startTime_log.startTime);
                log['endTime'] = new Date();
                // console.log(log,startTime_log)
                data = yield index_1.deviceSetupModel.findOneAndUpdate({ _id }, { power: _value, lastStringDateStamp: Date.now(), $push: { timelog: Object.assign({}, log) } });
            }
            resolve(data);
        }
        catch (error) {
            console.log(error.message);
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
                {
                    $lookup: {
                        from: 'DeviceLastLogs',
                        localField: 'deviceId',
                        foreignField: 'DeviceIMEI',
                        as: 'DeviceLastLogs'
                    },
                },
                { $unwind: { path: "$DeviceLastLogs", preserveNullAndEmptyArrays: true } },
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