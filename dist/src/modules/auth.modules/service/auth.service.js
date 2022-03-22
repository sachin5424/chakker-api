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
exports.findDataByEmail = exports.genrateJwttoken = exports.emailcheckService = exports.adminLoginService = exports.userRegister = void 0;
const index_1 = require("../../../db/index");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
let userRegister = (userData) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield index_1.userModel.create(userData).catch((err) => {
                reject(err);
            });
            resolve(data);
        }
        catch (error) {
            reject(error);
        }
    }));
};
exports.userRegister = userRegister;
let adminLoginService = (data) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const fatchData = yield index_1.userModel.findOne({ email: data.email, password: data.password, userTpe: 'admin', isEmailverified: true }).catch((error) => {
                reject(error);
            });
            resolve(fatchData);
        }
        catch (error) {
            reject(error);
        }
    }));
};
exports.adminLoginService = adminLoginService;
let emailcheckService = (data, type) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const fatchData = yield index_1.userModel.findOne({ email: data, userTpe: type }).catch((error) => {
                reject(error);
            });
            resolve(fatchData);
        }
        catch (error) {
            reject(error);
        }
    }));
};
exports.emailcheckService = emailcheckService;
let findDataByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield index_1.userModel.findOne({ email: email });
    return data;
});
exports.findDataByEmail = findDataByEmail;
let genrateJwttoken = (data) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const payload = {
                _id: data._id,
                email: data.email,
                username: data.username,
            };
            const token = jsonwebtoken_1.default.sign(payload, 'test', { expiresIn: 260 * 260 });
            resolve(token);
        }
        catch (error) {
            reject(error);
        }
    }));
};
exports.genrateJwttoken = genrateJwttoken;
//# sourceMappingURL=auth.service.js.map