"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    username: {
        type: String,
    },
    firstName: {
        type: String,
    },
    lastName: { type: String },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    mobileNumber: { type: String },
    gender: { type: String, enum: ['male', 'female', 'other'] },
    isEmailverified: { type: Boolean, default: false },
    emailOtp: { type: Number },
    userTpe: { type: String, default: "user" },
    joinDate: { type: Date, default: Date.now() },
    lastLogin: { type: Date, default: Date.now() },
    isActive: { type: Number, default: 1 },
});
const userModel = mongoose_1.default.model('user', schema);
exports.default = userModel;
//# sourceMappingURL=user.js.map