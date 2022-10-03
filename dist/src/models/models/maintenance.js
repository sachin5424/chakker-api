"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    nextDate: {
        type: String,
    },
    doneBy: {
        type: String,
    },
    remark: {
        type: String,
    },
    alert: {
        type: String,
    },
    deviceId: {
        type: String,
        required: true,
    },
});
const Drvice_Maintenance = mongoose_1.default.model('Drvice_Maintenance', schema);
exports.default = Drvice_Maintenance;
//# sourceMappingURL=maintenance.js.map