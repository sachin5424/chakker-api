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
exports.updateZoneSetUpLocationsService = exports.zoneSetupFindById = exports.checkByIdUniqueZoneNameValidation = exports.updateZoneSetUpService = exports.listZoneSetUpService = exports.deleteZoneSetUpService = exports.findOneZone = exports.addZoneService = exports.checkUniqueZoneNameValidation = void 0;
const index_1 = require("../models/index");
let checkUniqueZoneNameValidation = (zoneName) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield index_1.zoneSetupModel.findOne({ zoneName: zoneName }).catch((err) => {
                reject(err);
            });
            resolve(data);
        }
        catch (error) {
            reject(error);
        }
    }));
};
exports.checkUniqueZoneNameValidation = checkUniqueZoneNameValidation;
let checkByIdUniqueZoneNameValidation = (id, zoneName) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield index_1.zoneSetupModel.findOne({ _id: { $ne: id }, zoneName: zoneName }).catch((err) => {
                reject(err);
            });
            resolve(data);
        }
        catch (error) {
            reject(error);
        }
    }));
};
exports.checkByIdUniqueZoneNameValidation = checkByIdUniqueZoneNameValidation;
let addZoneService = (setUpZone) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield index_1.zoneSetupModel.create(setUpZone).catch((err) => {
                reject(err);
            });
            resolve(data);
        }
        catch (error) {
            reject(error);
        }
    }));
});
exports.addZoneService = addZoneService;
let findOneZone = (id) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield index_1.zoneSetupModel.findOne({ _id: id }).catch((error) => {
                reject(error);
            });
            resolve(data);
        }
        catch (error) {
            reject(error);
        }
    }));
};
exports.findOneZone = findOneZone;
let zoneSetupFindById = (id) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield index_1.zoneSetupModel.findOne({ _id: id }).catch((error) => {
                reject(error);
            });
            resolve(data);
        }
        catch (error) {
            reject(error);
        }
    }));
};
exports.zoneSetupFindById = zoneSetupFindById;
let deleteZoneSetUpService = (id) => {
    return new Promise((resolve, reject) => {
        try {
            const data = index_1.zoneSetupModel.findOneAndDelete({ _id: id }).catch((eror) => {
                reject(eror);
            });
            resolve(data);
        }
        catch (error) {
            reject(error);
        }
    });
};
exports.deleteZoneSetUpService = deleteZoneSetUpService;
let listZoneSetUpService = () => {
    return new Promise((resolve, reject) => {
        try {
            const data = index_1.zoneSetupModel.find().catch((eror) => {
                reject(eror);
            });
            resolve(data);
        }
        catch (error) {
            reject(error);
        }
    });
};
exports.listZoneSetUpService = listZoneSetUpService;
let updateZoneSetUpService = (id, updateValue) => {
    return new Promise((resolve, reject) => {
        try {
            const data = index_1.zoneSetupModel.findOneAndUpdate({ _id: id }, updateValue).catch((eror) => {
                reject(eror);
            });
            resolve(data);
        }
        catch (error) {
            reject(error);
        }
    });
};
exports.updateZoneSetUpService = updateZoneSetUpService;
let updateZoneSetUpLocationsService = (id, updateData) => {
    return new Promise((resolve, reject) => {
        try {
            const data = index_1.zoneSetupModel.findOneAndUpdate({ _id: id }, updateData).catch((eror) => {
                reject(eror);
            });
            resolve(data);
        }
        catch (error) {
            reject(error);
        }
    });
};
exports.updateZoneSetUpLocationsService = updateZoneSetUpLocationsService;
//# sourceMappingURL=zone-setup.service.js.map