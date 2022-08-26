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
exports.ADMINJWTVERIFY = void 0;
// var jwt = require('jsonwebtoken');
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var JWT_SECREATE_kEY = 'test';
const user_1 = __importDefault(require("../models/models/user"));
// const mongoose = require('mongoose');
const ADMINJWTVERIFY = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // console.log(req.headers.authorization);
        var bearer = req.headers.authorization.split(" ");
        const token = bearer[1];
        var decode = jsonwebtoken_1.default.verify(token, JWT_SECREATE_kEY);
        const user = yield user_1.default.findOne({ _id: decode._id, userTpe: 'admin' });
        if (user) {
            req.userId = decode._id;
            next();
        }
        else {
            return res.status(401).json({ message: "Failed to authenticate token" });
        }
        // if(user){
        //     next()
        // }
        //              return  res.status(401).json({
        //             status: 401,
        //             message: "Failed to authenticate token."
        //         })
    }
    catch (error) {
        res.status(401).json({
            status: 401,
            message: "Failed to authenticate token."
        });
    }
});
exports.ADMINJWTVERIFY = ADMINJWTVERIFY;
// module.exports = async (req, res, next) => {
// }
//# sourceMappingURL=admin-verify-jwt.js.map