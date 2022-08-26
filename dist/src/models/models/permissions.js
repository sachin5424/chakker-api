"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
let schema = new mongoose_1.default.Schema({
    title: {
        type: String
    },
    model_name: { type: String },
    method: {
        type: String
    },
});
const permissionsModel = mongoose_1.default.model('permissions', schema);
exports.default = permissionsModel;
//# sourceMappingURL=permissions.js.map