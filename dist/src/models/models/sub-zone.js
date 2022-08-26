"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    zoneName: {
        type: String,
        required: true,
    },
    location: {
        type: {
            type: String,
            default: "Point"
        },
        coordinates: Array
    },
    status: {
        type: Boolean,
        default: true
    },
    serverTime: {
        type: Date,
        default: new Date
    },
    UID: {
        type: Number
    },
});
const subZoneModel = mongoose_1.default.model('sub_zone', schema);
exports.default = subZoneModel;
//# sourceMappingURL=sub-zone.js.map