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
exports.userUpdateOne = exports.userFindOne = exports.adminUserListService = exports.userProfileService = void 0;
const index_1 = require("../models/index");
const shared_service_1 = require("./shared.service");
// import second from './'
const userProfileService = (value) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = new index_1.userProfileModel(value);
            const newData = yield data.save();
            resolve(newData);
        }
        catch (error) {
            reject(error);
        }
    }));
};
exports.userProfileService = userProfileService;
const adminUserListService = (filter) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield (0, shared_service_1.aggregate)(index_1.userModel, filter);
            resolve(data);
        }
        catch (error) {
            reject(error);
        }
    }));
};
exports.adminUserListService = adminUserListService;
const userFindOne = (filter) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield (0, shared_service_1.aggregate)(index_1.userModel, filter);
            resolve(data);
        }
        catch (error) {
            reject(error);
        }
    }));
};
exports.userFindOne = userFindOne;
const userUpdateOne = (id, value) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield index_1.userModel.updateOne({ _id: id }, value);
            const profileUpdate = yield index_1.userProfileModel.updateOne({ userId: id }, value);
            resolve({ data, profileUpdate });
        }
        catch (error) {
            reject(error);
        }
    }));
};
exports.userUpdateOne = userUpdateOne;
//# sourceMappingURL=user.service.js.map