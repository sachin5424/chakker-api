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
const auth_service_1 = require("../services/auth.service");
const user_service_1 = require("../services/user.service");
const _helper_1 = require("../utls/_helper");
const mongoose_1 = __importDefault(require("mongoose"));
class UserController {
    constructor() {
    }
    userRegister(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = req.body;
                const otp = (0, _helper_1.generateOtp)("0978");
                const data = yield (0, auth_service_1.userRegister)({
                    username: payload.username,
                    password: payload.password,
                    email: payload.email,
                    emailOtp: otp
                });
                let options = {
                    userId: data._id,
                    gender: payload.gender,
                    companyName: payload.companyName,
                    application: payload.application,
                    mobileNumber: payload.mobile,
                    status: payload.status
                };
                const createProfile = yield (0, user_service_1.userProfileService)(options);
                return res.status(200).json({
                    status: 200,
                    message: "user created successfully !",
                    data: createProfile
                });
            }
            catch (error) {
                return res.status(500).json({ error: error.message, status: 500 });
            }
        });
    }
    userEmailVerification(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = req.body;
                let options = {
                    email: payload.email,
                    otp: payload.otp
                };
                return res.status(200).json({ status: 200, data: options });
            }
            catch (error) {
                return res.status(500).json({ error: error.message, status: 500 });
            }
        });
    }
    userList(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("uuu");
                const filter = [
                    {
                        $match: {
                            isActive: 1,
                            // isEmailverified:true,
                        }
                    },
                    {
                        $lookup: {
                            from: "user_profiles",
                            localField: "_id",
                            foreignField: "userId",
                            as: "profile"
                        }
                    },
                    {
                        $unwind: "$profile"
                    }
                ];
                const data = yield (0, user_service_1.adminUserListService)(filter);
                return res.status(200).json({ status: 200, data: data });
            }
            catch (error) {
                return res.status(500).json({ error: error.message, status: 500 });
            }
        });
    }
    userDetails(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const _id = req.params.id;
                const filter = [
                    {
                        $match: {
                            _id: new mongoose_1.default.Types.ObjectId(_id),
                        }
                    },
                    {
                        $lookup: {
                            from: "user_profiles",
                            localField: "_id",
                            foreignField: "userId",
                            as: "profile"
                        }
                    },
                    {
                        $unwind: "$profile"
                    }
                ];
                const data = yield (0, user_service_1.adminUserListService)(filter);
                return res.status(200).json({ status: 200, data: data });
            }
            catch (error) {
                return res.status(500).json({ error: error.message, status: 500 });
            }
        });
    }
    userUpdate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const _id = req.params.id;
                const payload = req.body;
                console.log(payload);
                const data = yield (0, user_service_1.userUpdateOne)(_id, payload);
                return res.status(200).json({ status: 200, data });
            }
            catch (error) {
                return res.status(500).json({ error: error.message, status: 500 });
            }
        });
    }
}
exports.default = UserController;
//# sourceMappingURL=user.controller.js.map